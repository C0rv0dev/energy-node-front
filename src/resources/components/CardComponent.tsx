import React from 'react';
import { Box, Card, CardContent, Theme, Typography } from '@mui/material';

interface CardComponentProps {
  children: React.ReactNode;
  headerTitle?: string;
  headerBackgroundColor?: (theme: Theme) => string;
  headerFontColor?: string;
  headerAlign?: 'left' | 'center' | 'right' | 'space-around' | 'space-between' | 'space-evenly' | 'stretch';
  headerTitleSize?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  headerActions?: React.ReactNode;
}

function CardComponent({
  children,
  headerTitle,
  headerBackgroundColor,
  headerFontColor,
  headerAlign,
  headerTitleSize = 'h6',
  headerActions,
}: CardComponentProps) {
  const defaultHeaderBackgroundColor = headerBackgroundColor ? headerBackgroundColor : (theme: any) => theme.palette.primary.main;

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column' }}>
      {headerTitle && (
        <CardContent
          sx={{
            background: (theme) => defaultHeaderBackgroundColor(theme),
            borderTopLeftRadius: 2,
            borderTopRightRadius: 2,
            display: 'flex',
            justifyContent: headerActions ? 'space-between' : headerAlign,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography
              variant={headerTitleSize}
              fontFamily={'monospace'}
              color={headerFontColor}
            >
              {headerTitle}
            </Typography>
          </Box>

          {headerActions && (
            headerActions
          )}
        </CardContent>
      )}
      <CardContent>
        {children}
      </CardContent>
    </Card>

  );
}

export default CardComponent;
