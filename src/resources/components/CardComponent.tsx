import React from 'react';
import { Avatar, Card, CardContent, CardHeader, Theme } from '@mui/material';

interface CardComponentProps {
  children: React.ReactNode;
  hasHeader?: boolean;
  headerTitle?: string;
  headerBackgroundColor?: (theme: Theme) => string;
  headerFontColor?: string;
  headerAlign?: 'left' | 'center' | 'right';
  avatar?: string;
}

function CardComponent({
  children,
  hasHeader,
  headerTitle,
  headerBackgroundColor,
  headerFontColor,
  headerAlign,
  avatar
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
          avatar={avatar && (
            <Avatar>
              {avatar}
            </Avatar>
          )}
        />
      )}
      <CardContent>
        {children}
      </CardContent>
    </Card>

  );
}

export default CardComponent;
