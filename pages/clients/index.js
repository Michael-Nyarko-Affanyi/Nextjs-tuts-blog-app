import Link from "next/link"

function ClientsPage() {
  return (
    <div>
        <h1>Clients</h1>
        <Link href={`/id`}>Single client</Link>
    </div>
  )
}

export default ClientsPage