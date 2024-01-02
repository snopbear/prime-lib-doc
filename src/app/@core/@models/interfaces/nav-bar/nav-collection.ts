import { NavLink } from './nav-link';

export interface NavCollection {
  components: NavLink[];
  services: NavLink[];
  interceptors: NavLink[];
  directives: NavLink[];
  resolvers: NavLink[];
  pipes: NavLink[];
  externalPackages: NavLink[];
  builder: NavLink[];
  seo: NavLink[];
  logger: NavLink[];
  tutorial: NavLink[];
  configuration: NavLink[];
}
