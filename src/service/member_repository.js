import { firebaseDatabase } from "./firebase";

class MemberRepository {
  syncMember(userId, onUpdate) {
    const ref = firebaseDatabase.ref(`${userId}/members`);
    ref.on("value", (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => ref.off();
  }
  search(userId, kind, keyword, onUpdate) {
    firebaseDatabase
      .ref(`${userId}/members/`)
      .orderByChild(kind)
      .equalTo(keyword)
      .once("value")
      .then((result) => {
        if (result.exists()) onUpdate(result.val());
        else alert("일치하는 검색결과가 없습니다.");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  saveMember(userId, card) {
    firebaseDatabase.ref(`${userId}/members/${card.id}`).set(card);
  }

  removeMember(userId, card) {
    firebaseDatabase.ref(`${userId}/members/${card.id}`).remove();
  }
}

export default MemberRepository;
