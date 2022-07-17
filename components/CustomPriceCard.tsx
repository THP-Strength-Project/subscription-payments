import { FC } from 'react';
import {
    Box,
    Grid,
    Paper,
    Badge,
    Text,
    List,
    Button,
    useMantineTheme,
    Anchor
} from '@mantine/core';
import { BsCheckCircle } from 'react-icons/bs';
import { breakpoints } from '@/utils/breakpoints';

const CustomePriceCard: FC<{
    badge?: string;
    badgeColor?: string;
    buttonText: string;
    features: { id: string; featureName: string }[];
}> = ({ badge, badgeColor, buttonText, features }) => {
    const theme = useMantineTheme();

    return (
        <Paper
            sx={{
                padding: 40,
                textAlign: 'left',
                height: '600px',
                position: 'relative'
            }}
            shadow="md"
            radius="lg"
        >
            <Badge variant="filled" color={badgeColor || 'green'}>
                {badge || ''}
            </Badge>
            <Grid
                align={'center'}
                justify="left"
                columns={2}
                grow={false}
                my="xl"
                mt={30}
            >
                <Text sx={{ fontSize: '3.75em' }} weight="bold">
                    Custom
                </Text>
            </Grid>
            <Box my="xl">
                <Text size="lg" sx={(theme) => ({ color: theme.colors.gray[6] })}>
                    Obi-Wan is here. The Force is with him. Don't act so surprised, Your
                    Highness. You weren't on any mercy mission this time.
                </Text>
            </Box>

            <Box my="xl">
                <List
                    spacing="sm"
                    size="md"
                    center
                    icon={
                        <BsCheckCircle fontSize={'1.75em'} color={theme.colors.green[5]} />
                    }
                >
                    {features.map((feature) => (
                        <List.Item key={feature.id}>
                            <Text size="md" weight={'bold'}>
                                {feature.featureName}
                            </Text>
                        </List.Item>
                    ))}
                </List>
            </Box>
            <Box
                sx={{
                    width: '80%',
                    position: 'absolute',
                    bottom: '20px',
                    [breakpoints.phone]: {}
                }}
                my="xl"
            >
                <Anchor sx={{ textDecoration: "none" }} href={'mailto:support@thpstrength.com'} >
                    <Button
                        component="a"
                        fullWidth
                        color="blue"
                        sx={{ textDecoration: 'none' }}
                    >
                        {buttonText}
                    </Button>
                </Anchor>
            </Box>
        </Paper>
    );
};

export default CustomePriceCard;
