
export default function Sidebar({ setActiveComponent }) {
    return (
      <aside className="w-1/6 bg-white p-4 shadow">
        <ul className="space-y-2">
        <li>
          <button onClick={() => setActiveComponent('profile')}>Profile</button>
        </li>
        <li>
          <button onClick={() => setActiveComponent('orders')}>Orders</button>
        </li>
        <li>
          <button onClick={() => setActiveComponent('address')}>Address</button>
        </li>
      </ul>
      </aside>
    );
  }