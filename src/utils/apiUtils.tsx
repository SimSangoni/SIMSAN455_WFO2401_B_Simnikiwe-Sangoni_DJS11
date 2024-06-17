export async function fetchGenreDetails(genreId: number) {
    const response = await fetch(`https://podcast-api.netlify.app/genre/${genreId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }
  
  export async function fetchShowDetails(showId: string) {
    const response = await fetch(`https://podcast-api.netlify.app/show/${showId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }
  