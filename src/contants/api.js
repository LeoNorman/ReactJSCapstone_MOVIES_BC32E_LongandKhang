import axios from "axios";

const Authorization='Bearer'+" "+'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3RyaW5nIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoic3RyaW5nQGdtYWlsLmNvbW1tIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjpbIlF1YW5UcmkiLCJzdHJpbmdAZ21haWwuY29tbW0iLCJncDAxIl0sIm5iZiI6MTY2NjY2NzEzMywiZXhwIjoxNjY2NjcwNzMzfQ.2VsPIOZQHCLEVqf_uxJCnya_ixZhdtQSyKUV0yGM450'


const TokenCyberSoft='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIyMC8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzkyNzA0MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3OTQxODAwMH0.S7l5kogAVJjRW8mjJ5gosJraYq5ahYjrBwnMJAaGxlY'

const baseURL='https://movienew.cybersoft.edu.vn'


export const api=axios.create()//


api.interceptors.request.use((config)=>{
  config={
    ...config,
    headers: {
      Authorization,
      TokenCyberSoft,
    },
    baseURL,
  }
  return config
})