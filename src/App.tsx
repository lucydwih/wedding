import { AnimatePresence, motion } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import InvitePage from './pages/InvitePage';
import AdminPage from './pages/AdminPage';
import NotFound from './pages/NotFound';

const pageTransition = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -24 },
};

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}> 
          <Route
            index
            element={
              <motion.div initial="hidden" animate="visible" exit="exit" variants={pageTransition}>
                <HomePage />
              </motion.div>
            }
          />
          <Route
            path="invite/:guest"
            element={
              <motion.div initial="hidden" animate="visible" exit="exit" variants={pageTransition}>
                <InvitePage />
              </motion.div>
            }
          />
          <Route
            path="admin/*"
            element={
              <motion.div initial="hidden" animate="visible" exit="exit" variants={pageTransition}>
                <AdminPage />
              </motion.div>
            }
          />
          <Route
            path="*"
            element={
              <motion.div initial="hidden" animate="visible" exit="exit" variants={pageTransition}>
                <NotFound />
              </motion.div>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
