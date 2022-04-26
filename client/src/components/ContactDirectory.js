import Contact from './Contact';


function ContactDirectory({avatars, loggedState}){
  return (
    <div className='row'>
      {avatars.map((user,i) => {
        console.log('i',avatars[i])
        return (
        <Contact
          key ={i}
          did={avatars[i]._id}
          name={avatars[i].name + " " + avatars[i].name}
          email={avatars[i].email}
          profession={avatars[i].profession}
          startTime = {avatars[i].availability?.startTime}
          endTime = {avatars[i].availability?.endTime}
          availability = {avatars[i].availability?.days}
          loggedState = {loggedState}
        />)
      }) }
    </div>
  );

}

export default ContactDirectory;
