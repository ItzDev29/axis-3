import Sponsers from "./Sponsers"
export default async function Page() {
   let Event;
    try {
      const response = await fetch('https://axis-3.vercel.app/api/getSponsers', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
       
        },
     
      },{cache:'no-store'});
      
      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }
      
      const events = await response.json();
       Event= events && events.events;
    } catch (error) {
      console.log('Error fetching events:', error);
    }

      
      return(
        <Sponsers data={Event[0]}/>
      )

  }
