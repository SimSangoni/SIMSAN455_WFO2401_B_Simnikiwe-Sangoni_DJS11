
export default function Home(){

    async function fetchShows() {
        try {
          const response = await fetch('https://podcast-api.netlify.app/');
          const data = await response.json();
          console.log(data[0]); 
        } catch (error) {
          console.error('Error fetching shows:', error);
        }
      };

      fetchShows()

    return (
        
            <div>
                This is the home page
            </div> 
    )
}