import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Sidebar: React.FC = () => {
  const router = useRouter();
  const isActive = (path: string) => router.pathname.startsWith(path);
  const isControlSection = router.pathname.startsWith("/control");
  const [isControlOpen, setIsControlOpen] = useState(isControlSection);
  const toggleControl = () => setIsControlOpen((prev) => !prev);
  return (
    <div className="sidebar__container">
      <div className="dashboardLink">
        <Link
          href="/dashboard"
          className={isActive("/dashboard") ? "active" : ""}
        >
          Dashboard
        </Link>
      </div>
      <div className="eventsLink">
        <Link href="/events" className={isActive("/events") ? "active" : ""}>
          Events
        </Link>
      </div>
      <div className="trapsLink">
        <Link href="/traps" className={isActive("/traps") ? "active" : ""}>
          Honeypots
        </Link>
      </div>
      <div>
        <Link href="" onClick={toggleControl} className="controlLink">
          <span className="controlLink__text">Control</span>
          <ArrowForwardIosIcon
            className={`arrowIcon ${isControlOpen ? "expanded" : ""}`}
          />
        </Link>
        <div className={`controlSubLinks ${isControlOpen ? "open" : ""}`}>
          <div className="authMethodLink">
            <Link
              href="/control/auth-method"
              className={isActive("/control/auth-method") ? "active" : ""}
            >
              Auth Method
            </Link>
          </div>
          <div className="eventsTransferLink">
            <Link
              href="/control/events-transfer"
              className={isActive("/control/events-transfer") ? "active" : ""}
            >
              Events Transfer
            </Link>
          </div>
          <div className="notificationsLink">
            <Link
              href="/control/notifications"
              className={isActive("/control/notifications") ? "active" : ""}
            >
              Notifications
            </Link>
          </div>
        </div>
      </div>

      <div className="settingsLink">
        <Link
          href="/settings"
          className={isActive("/settings") ? "active" : ""}
        >
          Settings
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
