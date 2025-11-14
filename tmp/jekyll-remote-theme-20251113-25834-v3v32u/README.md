# jekyll-theme-coderic

Tema Jekyll moderno y profesional para el ecosistema Coderic.

## Instalación

### Método 1: Remote Theme (Recomendado para GitHub Pages)

1. Agrega las siguientes gemas a tu `Gemfile`:

```ruby
source "https://rubygems.org"

gem "jekyll", "~> 4.4"
gem "jekyll-remote-theme"
gem "jekyll-sitemap"
gem "jekyll-seo-tag"
gem "jekyll-feed"
```

2. Configura `_config.yml`:

```yaml
remote_theme: Coderic/jekyll-theme-coderic

plugins:
  - jekyll-remote-theme
  - jekyll-sitemap
  - jekyll-seo-tag
  - jekyll-feed
```

3. Instala las dependencias:

```bash
bundle install
```

### Método 2: Gem (Cuando esté publicado en RubyGems)

```ruby
# Gemfile
gem "jekyll-theme-coderic"
```

```yaml
# _config.yml
theme: jekyll-theme-coderic
```

## Uso

### Layouts Disponibles

- `default` - Layout base con header y footer
- `page` - Layout para páginas de contenido (incluye navegación)

### Ejemplo de Página

```markdown
---
layout: page
title: "Mi Página"
---

Contenido de la página aquí.
```

### Configuración

Configura el tema en tu `_config.yml`:

```yaml
# Información del sitio
title: "Mi Sitio"
description: "Descripción del sitio"
network: "ORG" # ORG, FINTECH, CLOUD, HUB

# Logo
logo: "/assets/img/coderic-isotipo.svg"

# Navegación
navigation:
  - label: "Home"
    url: "/"
  - label: "About"
    url: "/about"

# URLs de autenticación (opcional)
profile_url: "/profile"
dashboard_url: "/dashboard"

# URLs legales
privacy_url: "/privacy"
legal_url: "/legal"
tos_url: "/tos"

# Analytics (opcional)
google_analytics_id: "G-XXXXXXXXXX"
```

## Características

- ✅ Diseño moderno con Tailwind CSS v4
- ✅ Responsive y accesible
- ✅ Navegación con menú móvil
- ✅ Soporte para Auth0
- ✅ SEO optimizado
- ✅ Componentes reutilizables

## Estructura del Tema

```
jekyll-theme-coderic/
├── _layouts/
│   ├── default.html    # Layout base
│   └── page.html       # Layout de páginas
├── _includes/
│   └── portal.html     # Navegación principal
├── _sass/
│   └── coderic-theme/
│       └── main.scss   # Estilos del tema
└── assets/
    ├── css/
    │   └── main.scss   # Entry point de estilos
    └── img/
        └── coderic-isotipo.svg
```

## Desarrollo

```bash
# Clonar el repositorio
git clone https://github.com/Coderic/jekyll-theme-coderic.git
cd jekyll-theme-coderic

# Instalar dependencias
bundle install

# Construir el tema
bundle exec jekyll build
```

## Licencia

MIT License - ver [LICENSE](LICENSE) para más detalles.

## Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Soporte

- **Issues**: [GitHub Issues](https://github.com/Coderic/jekyll-theme-coderic/issues)
- **Documentación**: [GitHub Wiki](https://github.com/Coderic/jekyll-theme-coderic/wiki)

---

**Coderic** © 2004-2024 · Desde septiembre 30, 2004
