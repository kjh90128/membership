import { firebaseDatabase } from './firebase';

class MemberRepository{

  syncMember(userId, onUpdate){
    const ref=firebaseDatabase.ref(`${userId}/members`);
    ref.on('value', snapshot=>{
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return ()=>ref.off();
  }
  saveMember(userId, card){
    firebaseDatabase.ref(`${userId}/members/${card.id}`).set(card);
  }

  removeMember(userId, card){
    firebaseDatabase.ref(`${userId}/members/${card.id}`).remove();
  }
}

export default MemberRepository;