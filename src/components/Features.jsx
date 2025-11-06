import { ClipboardList, CreditCard, Users, Wrench } from 'lucide-react';

const features = [
  {
    title: 'Smart lease tracking',
    description:
      'Keep contracts, dates, and rent schedules organized with automated reminders and alerts.',
    Icon: ClipboardList,
  },
  {
    title: 'Online payments',
    description:
      'Collect rent and deposits securely with receipts and payout tracking in one place.',
    Icon: CreditCard,
  },
  {
    title: 'Portals for everyone',
    description:
      'Invite owners and tenants to self-serve, update details, and view statements.',
    Icon: Users,
  },
  {
    title: 'Maintenance made easy',
    description:
      'Log issues, assign vendors, and monitor progress with a clear audit trail.',
    Icon: Wrench,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 lg:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Everything you need to run properties</h2>
          <p className="mt-3 text-slate-600">
            Purpose-built tools to streamline your workflows and keep every stakeholder in sync.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, Icon }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
