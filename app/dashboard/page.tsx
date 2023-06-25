import bcrypt from "bcrypt";
import { getServerSession } from "next-auth";
import QRCode from "react-qr-code";
import { authOptions } from "app/api/auth/[...nextauth]/route";
import AuthNav from "app/components/AuthNav";
import { prisma } from "db";
import completed from "utils/completed";
import DashboardButton from "./DashboardButton";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email as string;
  const hashedEmail = await bcrypt.hash(email, 8);

  const user = await prisma.user.upsert({
    where: { email },
    update: {},
    create: { email, qr: hashedEmail },
    include: { completed: true },
  });

  return (
    <div className="bg-black">
      <AuthNav />
      <section className="min-h-screen pt-32">
        <h2 className="gradient-text mb-8">Dashboard</h2>
        <h3 className="mb-8 text-3xl font-semibold text-gold">
          Welcome back, {session?.user?.name || session?.user?.email}
        </h3>
        <div className="flex w-full flex-col gap-8 lg:flex-row">
          <div className="rounded-md bg-white p-4">
            <QRCode className="mx-auto" size={224} value={user.email} />
          </div>
          <div className="flex w-full flex-col gap-8">
            <DashboardButton
              name="Hacker Application"
              href="/app/hacker"
              status={
                // completed(user.completed, "HACKERAPP")
                //   ? "COMPLETE" :
                "INCOMPLETE"
              }
            />
            <DashboardButton
              name="Volunteer Application"
              href="/app/hacker"
              status="UNAVAILABLE"
            />
            <DashboardButton name="RSVP" status="UNAVAILABLE" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
