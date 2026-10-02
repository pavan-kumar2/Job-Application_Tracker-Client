import {
  Box,
  Chip,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from '@mui/material'

const links = [
  { label: 'Vite Docs', href: 'https://vitejs.dev' },
  { label: 'React Docs', href: 'https://react.dev' },
]

function App() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'stretch',
        gap: 3,
        bgcolor: '#f3f6fb',
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: 260,
          p: 2,
          borderRadius: 3,
          border: '1px solid #dfe6f1',
          bgcolor: '#ffffff',
        }}
      >
        <Typography variant="h6" sx={{ px: 1.5, py: 1.5, fontWeight: 700 }}>
          Navigation
        </Typography>
        <Divider />
        <List disablePadding sx={{ mt: 1 }}>
          {links.map((item) => (
            <ListItemButton
              key={item.label}
              component="a"
              href={item.href}
              target="_blank"
              rel="noreferrer"
              sx={{
                borderRadius: 2,
                my: 0.5,
                '&:hover': { bgcolor: '#edf4ff' },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Paper>

      <Box
        component="main"
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          p: 4,
          borderRadius: 4,
          bgcolor: '#ffffff',
          border: '1px solid #dfe6f1',
          boxShadow: '0 12px 30px rgba(15, 23, 42, 0.06)',
        }}
      >
        <Typography variant="overline" sx={{ color: '#5b6b8a', letterSpacing: 1.4 }}>
          Dashboard
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
          Main content
        </Typography>

        <Stack direction="row" spacing={1} sx={{ mb: 3, flexWrap: 'wrap', gap: 1 }}>
          <Chip label="React" color="primary" variant="outlined" />
          <Chip label="Material UI" color="secondary" variant="outlined" />
          <Chip label="Vite" variant="outlined" />
        </Stack>

        <Paper
          elevation={0}
          sx={{
            p: 3,
            borderRadius: 3,
            bgcolor: '#f8fafc',
            border: '1px solid #e2e8f0',
          }}
        >
          <Typography variant="body1" sx={{ color: '#334155', lineHeight: 1.8 }}>
            This layout uses Material UI cards, lists, and chips to give the sidebar + main panel a
            clean, modern dashboard look.
          </Typography>
        </Paper>
      </Box>
    </Box>
  )
}

export default App
