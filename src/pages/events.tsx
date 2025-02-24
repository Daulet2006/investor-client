import NavBar from "../components/nav"

const EventsPage = () => {
  return (
    <div className="container flex gap-5">
        <NavBar />

        <main className="py-4">
          <h2 className="text-2xl font-bold mb-4">Manage Events</h2>
        </main>
    </div>
  )
}

export default EventsPage