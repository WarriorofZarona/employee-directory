import React from "react"
import axios from "axios";

export default {
    search: (parameter, query) => axios.get("https://randomuser.me/api/?" + parameter + "=" + query)
}
