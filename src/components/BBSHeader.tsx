import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { 
  Menu, 
  X, 
  GraduationCap, 
  BookOpen, 
  Users, 
  Award, 
  Phone,
  DollarSign
} from "lucide-react";

interface NavigationItem {
  title: string;
  href?: string;
  description?: string;
  items?: {
    title: string;
    href: string;
    description?: string;
  }[];
}

const navigationItems: NavigationItem[] = [
  {
    title: "Curriculum",
    description: "12-Week transformation program",
    items: [
      {
        title: "Foundation (Weeks 1-4)",
        href: "/courses#phase-1",
        description: "Business structure, contracts, financial management"
      },
      {
        title: "Growth (Weeks 5-8)", 
        href: "/courses#phase-2",
        description: "Marketing, sales, team building strategies"
      },
      {
        title: "Scaling (Weeks 9-12)",
        href: "/courses#phase-3", 
        description: "Advanced strategies and exit planning"
      },
      {
        title: "Resources & Templates",
        href: "/resources",
        description: "50+ contracts, SOPs, and financial tools"
      }
    ]
  },
  {
    title: "Pricing",
    description: "Investment in your future",
    items: [
      {
        title: "Starter - $97/month",
        href: "/pricing",
        description: "Full email course & basic templates"
      },
      {
        title: "Professional - $197/month",
        href: "/pricing",
        description: "All templates & community access"
      },
      {
        title: "Enterprise - $497/month",
        href: "/pricing",
        description: "1-on-1 coaching & custom SOPs"
      }
    ]
  },
  {
    title: "Success Stories",
    href: "/#success-stories"
  },
  {
    title: "FAQ",
    href: "/#faq"
  },
  {
    title: "Contact",
    href: "/contact"
  }
];

function BBSHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full z-50 sticky top-0 left-0 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-amber-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg shadow-md">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-amber-900">BBS</span>
              <span className="text-xs text-amber-700 hidden sm:block">Blue Collar Business School</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.items ? (
                      <>
                        <NavigationMenuTrigger className="bg-transparent text-amber-900 hover:bg-amber-100 hover:text-amber-900 focus:bg-amber-100 data-[active]:bg-amber-100/50 data-[state=open]:bg-amber-100/50">
                          <div className="flex items-center space-x-1">
                            {item.title === "Curriculum" && <BookOpen className="h-4 w-4" />}
                            {item.title === "Pricing" && <DollarSign className="h-4 w-4" />}
                            <span>{item.title}</span>
                          </div>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="w-[450px] p-4 bg-white">
                            <div className="mb-4">
                              <h4 className="text-sm font-bold text-amber-900 mb-1">{item.title}</h4>
                              <p className="text-sm text-amber-700">{item.description}</p>
                            </div>
                            <div className="grid gap-2">
                              {item.items.map((subItem) => (
                                <Link
                                  key={subItem.title}
                                  to={subItem.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-amber-50 hover:text-amber-900 focus:bg-amber-50"
                                >
                                  <div className="text-sm font-semibold leading-none text-amber-900">{subItem.title}</div>
                                  {subItem.description && (
                                    <p className="line-clamp-2 text-sm leading-snug text-amber-700">
                                      {subItem.description}
                                    </p>
                                  )}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        to={item.href || "#"}
                        className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-amber-900 transition-colors hover:bg-amber-100 hover:text-amber-900 focus:bg-amber-100 focus:text-amber-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                      >
                        <div className="flex items-center space-x-1">
                          {item.title === "Success Stories" && <Award className="h-4 w-4" />}
                          {item.title === "FAQ" && <Users className="h-4 w-4" />}
                          {item.title === "Contact" && <Phone className="h-4 w-4" />}
                          <span>{item.title}</span>
                        </div>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link to="/login">
              <Button 
                variant="ghost" 
                size="sm"
                className="text-amber-900 hover:bg-amber-100"
              >
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button 
                size="sm" 
                className="bg-orange-600 hover:bg-orange-700 text-white border-orange-600"
              >
                Start Free Trial
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-amber-900 hover:bg-amber-100"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-amber-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <div key={item.title} className="space-y-1">
                  {item.items ? (
                    <div className="space-y-2">
                      <div className="flex items-center px-3 py-2 text-sm font-semibold text-amber-900">
                        {item.title === "Curriculum" && <BookOpen className="h-4 w-4 mr-2" />}
                        {item.title === "Pricing" && <DollarSign className="h-4 w-4 mr-2" />}
                        {item.title}
                      </div>
                      <div className="pl-6 space-y-1">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.title}
                            to={subItem.href}
                            className="block px-3 py-2 text-sm text-amber-700 hover:text-amber-900 hover:bg-amber-50 rounded-md transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href || "#"}
                      className="flex items-center px-3 py-2 text-sm font-semibold text-amber-900 hover:text-amber-900 hover:bg-amber-50 rounded-md transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title === "Success Stories" && <Award className="h-4 w-4 mr-2" />}
                      {item.title === "FAQ" && <Users className="h-4 w-4 mr-2" />}
                      {item.title === "Contact" && <Phone className="h-4 w-4 mr-2" />}
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-2">
                <Link to="/login" className="block">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full justify-start text-amber-900 hover:bg-amber-100"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup" className="block">
                  <Button 
                    size="sm" 
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    Start Free Trial
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default BBSHeader;