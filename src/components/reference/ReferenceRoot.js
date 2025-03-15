import { Link, Routes, Route } from 'react-router-dom';
import ButtonReference from './ButtonReference';

function ReferenceRoot() {
  return (
    <div>
      <h1>Reference Root</h1>
      {/* Linkを追加 */}
      <nav>
        <Link to="/reference/button">Go to Button Reference</Link>
      </nav>
      {/* Nested Route */}
      <Routes>
        <Route path="button" element={<ButtonReference />} />
      </Routes>
    </div>
  );
}

export default ReferenceRoot;
