import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID RvAWoFSaP3bqS-0kjePE2w5ttFTlbazrDXBoM-9p0U8",
      },
      params: {
        query: term,
      },
    });

    return response.data.results;
}

export default searchImages;