import {useRouter} from 'next/router'
function BlogPost() {
    const router = useRouter()
    console.log(router.query)
  return (
    <div>BlogPost</div>
  )
}

export default BlogPost