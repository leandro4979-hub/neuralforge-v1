import LedgerTimeline from '@/components/labs/LedgerTimeline';

const mockEvents = [
  { id: 1, date: '2026-05-25 14:00', title: 'System Init', description: 'NeuralForge v1 Core Architecture' },
  { id: 2, date: '2026-05-25 15:10', title: 'Exp 001 Started', description: 'Code-to-Ledger Visualizer' }
];

export default function LabsDashboard() {
  return (
    <main className="p-8 bg-[#060816] min-h-screen text-[#E6EDF3]">
      <header className="mb-12">
        <h1 className="font-mono text-xl text-[#00F5FF]">NEURALFORGE_LABS</h1>
        <p className="text-sm text-slate-400">Experiment 001: Visualizing Architectural Evolution</p>
      </header>
      <section className="max-w-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-lg">
        <LedgerTimeline events={mockEvents} />
      </section>
    </main>
  );
}
