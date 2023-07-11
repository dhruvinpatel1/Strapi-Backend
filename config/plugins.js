module.exports = ({ env }) => ({
  'strapi-plugin-populate-deep': {
    config: {
      defaultDepth: 5, // Default is 5
    },
  },
  seo: {
    enabled: true,
  }, 
  menus: {
    config: {
      layouts: {
        menuItem: {
          link: [
            {
              input: {
                label: 'Bottom Border',
                name: 'bottom_border',
                type: 'select',
                options: [
                  {
                    label: 'Border',
                    value: 'border',
                  },
                  {
                    label: 'None',
                    value: 'none',
                  },
                ],
              },
              grid: {
                col: 6,
              },
            },
          ],
        },
      },
    },
  },
});