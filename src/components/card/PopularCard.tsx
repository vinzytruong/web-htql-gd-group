import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Avatar, Button, CardActions, CardContent, Divider, Grid, Menu, MenuItem, Typography } from '@mui/material';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import MainCard from './MainCard';
import SkeletonPopularCard from '../skeleton/PopularCard';
import BajajAreaChartCard from '../chart/BajajAreaChartCard';

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const PopularCard = ({ isLoading,data }:any) => {
  const theme = useTheme();
  

  return (
    <>
      {isLoading ? (
        <SkeletonPopularCard />
      ) : (
        <MainCard content={false}>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Grid container alignContent="center" justifyContent="space-between">
                  <Grid item>
                    <Typography variant="h4">Popular Stocks</Typography>
                  </Grid>
                
                </Grid>
              </Grid>
              <Grid item xs={12} sx={{ pt: '16px !important' }}>
                <BajajAreaChartCard />
              </Grid>
              <Grid item xs={12}>
                <Grid container direction="column">
                  <Grid item>
                    <Grid container alignItems="center" justifyContent="space-between">
                      <Grid item>
                        <Typography variant="subtitle1" color="inherit">
                          Bajaj Finery
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Grid container alignItems="center" justifyContent="space-between">
                          <Grid item>
                            <Typography variant="subtitle1" color="inherit">
                              $1839.00
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Avatar
                              variant="rounded"
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                backgroundColor: theme.palette.success.light,
                                color: theme.palette.success.dark,
                                ml: 2
                              }}
                            >
                              <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                            </Avatar>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle2" sx={{ color: 'success.dark' }}>
                      10% Profit
                    </Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 1.5 }} />
                <Grid container direction="column">
                  <Grid item>
                    <Grid container alignItems="center" justifyContent="space-between">
                      <Grid item>
                        <Typography variant="subtitle1" color="inherit">
                          TTML
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Grid container alignItems="center" justifyContent="space-between">
                          <Grid item>
                            <Typography variant="subtitle1" color="inherit">
                              $100.00
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Avatar
                              variant="rounded"
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                // backgroundColor: theme.palette.orange.light,
                                // color: theme.palette.orange.dark,
                                marginLeft: 1.875
                              }}
                            >
                              <KeyboardArrowDownOutlinedIcon fontSize="small" color="inherit" />
                            </Avatar>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle2" sx={{ 
                      // color: theme.palette.orange.dark
                       }}>
                      10% loss
                    </Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 1.5 }} />
                <Grid container direction="column">
                  <Grid item>
                    <Grid container alignItems="center" justifyContent="space-between">
                      <Grid item>
                        <Typography variant="subtitle1" color="inherit">
                          Reliance
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Grid container alignItems="center" justifyContent="space-between">
                          <Grid item>
                            <Typography variant="subtitle1" color="inherit">
                              $200.00
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Avatar
                              variant="rounded"
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                backgroundColor: theme.palette.success.light,
                                color: theme.palette.success.dark,
                                ml: 2
                              }}
                            >
                              <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                            </Avatar>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle2" sx={{ color: theme.palette.success.dark }}>
                      10% Profit
                    </Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 1.5 }} />
                <Grid container direction="column">
                  <Grid item>
                    <Grid container alignItems="center" justifyContent="space-between">
                      <Grid item>
                        <Typography variant="subtitle1" color="inherit">
                          TTML
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Grid container alignItems="center" justifyContent="space-between">
                          <Grid item>
                            <Typography variant="subtitle1" color="inherit">
                              $189.00
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Avatar
                              variant="rounded"
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                // backgroundColor: theme.palette.orange.light,
                                // color: theme.palette.orange.dark,
                                ml: 2
                              }}
                            >
                              <KeyboardArrowDownOutlinedIcon fontSize="small" color="inherit" />
                            </Avatar>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle2" sx={{ 
                      // color: theme.palette.orange.dark 
                      }}>
                      10% loss
                    </Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 1.5 }} />
                <Grid container direction="column">
                  <Grid item>
                    <Grid container alignItems="center" justifyContent="space-between">
                      <Grid item>
                        <Typography variant="subtitle1" color="inherit">
                          Stolon
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Grid container alignItems="center" justifyContent="space-between">
                          <Grid item>
                            <Typography variant="subtitle1" color="inherit">
                              $189.00
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Avatar
                              variant="rounded"
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                // backgroundColor: theme.palette.orange.light,
                                // color: theme.palette.orange.dark,
                                ml: 2
                              }}
                            >
                              <KeyboardArrowDownOutlinedIcon fontSize="small" color="inherit" />
                            </Avatar>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle2" sx={{ 
                      // color: theme.palette.orange.dark 
                      }}>
                      10% loss
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions sx={{ p: 1.25, pt: 0, justifyContent: 'center' }}>
            <Button size="small" disableElevation>
              View All
              <ChevronRightOutlinedIcon />
            </Button>
          </CardActions>
        </MainCard>
      )}
    </>
  );
};

export default PopularCard;
