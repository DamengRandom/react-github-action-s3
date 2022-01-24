import { h } from 'preact';
import Dashboard from '../../routes/Dashboard';

export default function Layout({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div class="layout" id={id}>
      <aside class="left-part">
        <Dashboard />
      </aside>
      <section class="right-part">{children}</section>
    </div>
  );
}
