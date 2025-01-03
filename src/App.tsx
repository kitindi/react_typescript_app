import Button from "./components/Button";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="w-full h-screen bg-[#eaeaea] ">
      <div className="container max-w-4xl h-screen mx-auto overflow-hidden flex items-center justify-center">
        <div className="w-full ">
          <Header />

          <div className="w-full grid h-[80vh] grid-cols-12 bg-[#fefefe] p-16 ">
            <div className="col-span-7 h-full px-8">
              <h2 className="text-2xl font-semibold text-[#252a2d]">Task Management</h2>
              <TaskList />
            </div>
            <div className="col-span-5  h-full border-l-2 px-12">
              <h3>Add task to the basket</h3>
              <div className="w-full h-[50vh] flex flex-col">
                <form action="">
                  <input type="text" className="border focus:outline-none p-2 my-3" />
                  <Button>Add</Button>
                </form>
              </div>
              <div className="mt-auto space-y-3">
                <Button>Login</Button>
                <Button>Register</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
