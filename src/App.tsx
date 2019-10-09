import React, {Suspense, } from 'react';
import LinearProgress from "@material-ui/core/LinearProgress";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import routes from "./routes"




const App: React.FC = () => {
  const [completed, setCompleted] = React.useState(0);
  React.useEffect(() => {
    function progress() {
      setCompleted(oldCompleted => {
        if (oldCompleted === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldCompleted + diff, 100);
      });
    }
    const timer = setInterval(progress, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Router>
       <Switch>
          <Suspense
             fallback={() => (
              <LinearProgress variant="determinate" color="primary" value={completed} />
            )}
          >
            {
              routes.map((route, i) => 
                <Route 
                  path={route.path} 
                  key={i}
                  exact={route.exact}
                  component={route.component}
                />
              )
              }
          </Suspense>
      </Switch>
    </Router>
   
  );
}

export default App;
