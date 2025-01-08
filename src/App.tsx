import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TaskList from "./components/TaskList";

function App() {
  // states

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
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
