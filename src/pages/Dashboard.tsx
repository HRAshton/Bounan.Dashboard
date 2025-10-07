export default function Dashboard() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="card">
        <h3 className="font-semibold mb-2">KPI</h3>
        <p className="text-gray-600 text-sm">
          Add your charts or metrics here.
        </p>
      </div>
      <div className="card">
        <h3 className="font-semibold mb-2">Tasks</h3>
        <ul className="list-disc pl-5 text-sm text-gray-700">
          <li>Connect real auth</li>
          <li>Wire API</li>
          <li>Add charts</li>
        </ul>
      </div>
    </div>
  );
}
