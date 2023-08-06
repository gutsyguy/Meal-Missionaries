import Ably from 'ably'


const ably = new Ably.Realtime({authUrl: ''})

await ably.connection.once('connected')
console.log("Connected to ably")


const channel = ably.channels.get('quickstart');

await channel.subscribe('greeting', (message) => {
    console.log('Received a greeting message in realtime: ' + message.data)
  });

  
await channel.publish('greeting', 'hello!');


ably.close(); // runs synchronously
console.log('Closed the connection to Ably.');