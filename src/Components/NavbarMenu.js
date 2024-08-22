import React from "react";
import { useLocation } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function NavbarMenu() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => currentPath === path;

  const linkStyles = {
    base: {
      textDecoration: "none",
      color: "black",
    },
    active: {
      color: "blue", // Color for active link
    },
    inactive: {
      color: "black", // Ensures inactive links are black
    },
    hover: {
      textDecoration: "underline", // Optional: underline on hover
    },
  };

  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/" >
        <p className="font-bold text-inherit">HOUSE RENTALS</p>
        </Link>
      </NavbarBrand>
      {/* nav items */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            href="/rent"
            style={{
              ...linkStyles.base,
              ...(isActive("/rent") ? linkStyles.active : linkStyles.inactive),
            }}
            aria-current={isActive("/rent") ? "page" : undefined}
            onMouseEnter={(e) =>
              (e.target.style.textDecoration = linkStyles.hover.textDecoration)
            }
            onMouseLeave={(e) =>
              (e.target.style.textDecoration = linkStyles.base.textDecoration)
            }
          >
            Rent
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/buy"
            style={{
              ...linkStyles.base,
              ...(isActive("/buy") ? linkStyles.active : linkStyles.inactive),
            }}
            aria-current={isActive("/buy") ? "page" : undefined}
            onMouseEnter={(e) =>
              (e.target.style.textDecoration = linkStyles.hover.textDecoration)
            }
            onMouseLeave={(e) =>
              (e.target.style.textDecoration = linkStyles.base.textDecoration)
            }
          >
            Buy
          </Link>
        </NavbarItem>
        {/* <NavbarItem>
          <Link
            href="/sell"
            style={{
              ...linkStyles.base,
              ...(isActive("/sell") ? linkStyles.active : linkStyles.inactive),
            }}
            aria-current={isActive("/sell") ? "page" : undefined}
            onMouseEnter={(e) =>
              (e.target.style.textDecoration = linkStyles.hover.textDecoration)
            }
            onMouseLeave={(e) =>
              (e.target.style.textDecoration = linkStyles.base.textDecoration)
            }
          >
            Sell
          </Link>
        </NavbarItem> */}
        <NavbarItem>
          <Link
            href="/favourite"
            style={{
              ...linkStyles.base,
              ...(isActive("/favourite")
                ? linkStyles.active
                : linkStyles.inactive),
            }}
            aria-current={isActive("/favourite") ? "page" : undefined}
            onMouseEnter={(e) =>
              (e.target.style.textDecoration = linkStyles.hover.textDecoration)
            }
            onMouseLeave={(e) =>
              (e.target.style.textDecoration = linkStyles.base.textDecoration)
            }
          >
            Favourites
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link
            href="/login"
            style={linkStyles.base}
            onMouseEnter={(e) =>
              (e.target.style.textDecoration = linkStyles.hover.textDecoration)
            }
            onMouseLeave={(e) =>
              (e.target.style.textDecoration = linkStyles.base.textDecoration)
            }
          >
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/signup" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
