let email = {
    mailboxes: {
      inbox: [
        {
          sender: 'Maryann',
          message: 'Its good to hear that.',
        },
        {
          sender: 'Brock',
          message: 'Whats a quiet Hawaiian laugh? Aloha',
        },
        {
          sender: 'Barbara',
          message: 'Dentists practice their trade by going through many drills.',
        },
        {
          sender: 'Kaster',
          message: 'The best time for a dentist appointment is… tooth hurty!'
        }
      ],
      important: [],
      sent: [],
      drafts: []
    },
    contacts: [
      { name: 'Maryann', email: 'maryann@gmail.com' },
      { name: 'Brock', email: 'brock@lionlabs.com' },
      { name: 'Barbara', email: 'barbara@outlook.com' },
      { name: 'Kaster', email: 'kaster@lordsdental.com' }
    ]
  };
const mailboxNames = Object.keys(email.mailboxes);
console.log(mailboxNames);// list of mailbox names

const inboxEmails = email.mailboxes.inbox.map(email => email.message);
console.log(inboxEmails);// list o'emails

console.log(email.mailboxes.inbox[1].message);// text from second email in inbox

email.mailboxes.drafts = 'To Maryann, Thanks for all the help!'
console.log(email.mailboxes.drafts);// added a draft email to draft mailbox

email.mailboxes['sent'].push(email.mailboxes.drafts);
console.log(email.mailboxes.sent);// moved email from the draft mailbox to the sent mailbox