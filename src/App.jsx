import React, { useState } from "react";
import { useEffect } from "react";
import Container from "./components/Container";
import TaskCreator from "./components/TaskCreator";
import TaskTable from "./components/TaskTable";
import VisibilityControl from "./components/VisibilityControl";

function App() {
    const [taskItems, setTaskItems] = useState([]);
    const [showCompleted, setshowCompleted] = useState(false);

    function createNewTask(taskName) {
        if (!taskItems.find((task) => task.name === taskName)) {
            setTaskItems([...taskItems, { name: taskName, done: false }]);
        }
    }

    const toggleTask = (task) => {
        setTaskItems(
            taskItems.map((t) =>
                t.name === task.name ? { ...t, done: !t.done } : t
            )
        );
    };

    useEffect(() => {
        let data = localStorage.getItem("tasks");
        if (data) {
            setTaskItems(JSON.parse(data));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(taskItems));
    }, [taskItems]);

    const cleanTask = () => {
        setTaskItems(taskItems.filter((task) => !task.done));
        setshowCompleted(false);
    };

    return (
        <main className="bg-dark vh-100 text-white ">
            <Container>
                <TaskCreator createNewTask={createNewTask} />
                <TaskTable tasks={taskItems} toggleTask={toggleTask} />
                <VisibilityControl
                    isChecked={showCompleted}
                    cleanTask={cleanTask}
                    setshowCompleted={(checked) => setshowCompleted(checked)}
                />
                {showCompleted && (
                    <TaskTable
                        tasks={taskItems}
                        toggleTask={toggleTask}
                        showCompleted={showCompleted}
                    />
                )}
            </Container>
        </main>
    );
}

export default App;
