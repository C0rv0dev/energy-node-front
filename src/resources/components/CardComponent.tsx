import React from 'react';
import { Card, CardContent, CardHeader } from '@mui/material';

interface CardComponentProps {
  children: React.ReactNode;
  hasHeader?: boolean;
  headerTitle?: string;
  headerBackgroundColor?: (theme: any) => string;
  headerFontColor?: string;
  headerAlign?: 'left' | 'center' | 'right';
}

function CardComponent({
  children,
  hasHeader,
  headerTitle,
  headerBackgroundColor,
  headerFontColor,
  headerAlign,
}: CardComponentProps) {
  const defaultHeaderBackgroundColor = headerBackgroundColor ? headerBackgroundColor : (theme: any) => theme.palette.primary.main;

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column' }}>
      {hasHeader && (
        <CardHeader
          title={headerTitle}
          align={headerAlign}
          sx={{
            display: 'flex',
            color: headerFontColor,
            backgroundColor: defaultHeaderBackgroundColor,
          }}
        />
      )}
      <CardContent>
        {children}
      </CardContent>
    </Card>

  );
}

export default CardComponent;
