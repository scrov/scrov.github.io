/** tailwind.config.mjs */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
    './README.mdx'
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace'
        ],
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif'
        ]
      },
      colors: {
        terminal: {
          black: '#030706',
          surface: '#07100d',
          panel: '#0a1511',
          border: '#123b2b',
          green: '#00ff88',
          emerald: '#00d97e',
          dim: '#168f5c',
          text: '#b7f7d5',
          muted: '#6d9c85',
          faint: '#315847',
          danger: '#ff5f56',
          warning: '#ffbd2e'
        }
      },
      boxShadow: {
        terminal: '0 0 40px rgba(0, 255, 136, 0.08)',
        glow: '0 0 12px rgba(0, 255, 136, 0.35)',
        'glow-lg': '0 0 30px rgba(0, 255, 136, 0.18)'
      },
      backgroundImage: {
        'terminal-grid':
          'linear-gradient(rgba(0,255,136,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.025) 1px, transparent 1px)'
      },
      backgroundSize: {
        grid: '32px 32px'
      },
      animation: {
        blink: 'blink 1s steps(2, start) infinite',
        scanline: 'scanline 8s linear infinite',
        pulseTerminal: 'pulseTerminal 3s ease-in-out infinite'
      },
      keyframes: {
        blink: {
          '0%, 49%': {
            opacity: '1'
          },
          '50%, 100%': {
            opacity: '0'
          }
        },
        scanline: {
          '0%': {
            transform: 'translateY(-100%)'
          },
          '100%': {
            transform: 'translateY(100vh)'
          }
        },
        pulseTerminal: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(0,255,136,0.04)'
          },
          '50%': {
            boxShadow: '0 0 40px rgba(0,255,136,0.10)'
          }
        }
      }
    }
  },
  plugins: []
}
