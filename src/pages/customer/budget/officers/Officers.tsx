
import OfficersDialog from "@/components/dialog/OfficersDialog"
import { AdminLayout } from "@/components/layout"
import SearchNoButtonSection from "@/components/search/SearchNoButton"
import { StyledButton } from "@/components/styled-button"
import TableOfficers from "@/components/table/table-officers/TableoOfficers"
import useOfficers from "@/hooks/useOfficers"
import useOrganization from "@/hooks/useOrganization"
import { Box, Button, CircularProgress, Grid, IconButton, Typography, useTheme } from "@mui/material"
import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/router"
import { IconChevronLeft } from '@tabler/icons-react';
import useProvince from "@/hooks/useProvince"
import useDistrict from "@/hooks/useDistrict"

const OfficersPage = (id: any) => {
    const { getAllOrganization, addOrganization, dataOrganization } = useOrganization()
    const { getAllOfficers, addOfficers, dataOfficers, getOfficersByOrganizationID } = useOfficers()
    const { dataProvince, getAllProvince } = useProvince()
    const { dataDistrict, getDistrictByProvinceId, getDistrictByID } = useDistrict()
    const [open, setOpen] = useState(false);
    const [contentSearch, setContentSearch] = useState<string>('')
    const theme = useTheme()
    const router = useRouter()

    useEffect(() => {
        getAllOrganization()
        
    }, [])
    useEffect(() => {
        
        getOfficersByOrganizationID(id.id)
    }, [getOfficersByOrganizationID, id.id])

    useEffect(() => {
        getAllProvince()
    }, [])

    useEffect(() => {
        if (dataOrganizationByID) getDistrictByID(dataOrganizationByID?.huyenID)
    }, [])

    const filterDataOrganization = useMemo(() => {
        return dataOfficers.filter((item) => item.hoVaTen?.includes(contentSearch))
    }, [contentSearch, dataOfficers])

    const dataOrganizationByID = dataOrganization.find(item => item.coQuanID === Number(id.id))

    const renderDataTinh = (tinhID: number) => dataProvince.find((item) => item.tinhID === tinhID)?.tenTinh
    const renderDataHuyen = (huyenID: number) => dataDistrict.find((item) => item.huyenID === huyenID)?.tenHuyen

    return (
        <AdminLayout>
            <Box padding="24px">
                <Box display='flex' alignItems='center' justifyContent='flex-start'>
                    <IconButton color="primary" onClick={() => router.back()}>
                        <IconChevronLeft stroke={3} />
                    </IconButton>
                    <Typography variant="h3" color={theme.palette.primary.main} py={2}>
                        Quản lý cán bộ
                    </Typography>
                </Box>
                <Grid container spacing={3}>
                    <Grid item md={12} lg={12} xl={3} >
                        <Box
                            display='flex'
                            flexDirection='column'
                            justifyContent='center'
                            alignItems='flex-start'
                            width='100%'
                            bgcolor={theme.palette.background.paper}
                            px={3}
                            py={3}
                            gap={4}
                        >
                            <Box
                                display='flex'
                                justifyContent='space-between'
                                alignItems='center'
                                width='100%'>
                                <Typography variant="h5" color={theme.palette.primary.main}>Thông tin cơ quan</Typography>
                            </Box>

                            <Box
                                display='flex'
                                justifyContent='space-between'
                                alignItems='center'
                                width='100%'
                            >
                                <Typography color={theme.palette.text.primary} fontWeight='bold'>Tên cơ quan</Typography>
                                <Typography fontSize={14}>{dataOrganizationByID?.tenCoQuan}</Typography>
                            </Box>
                            <Box
                                display='flex'
                                justifyContent='space-between'
                                alignItems='center'
                                width='100%'
                            >
                                <Typography color={theme.palette.text.primary} fontWeight='bold'>Mã số thuế</Typography>
                                <Typography fontSize={14}>{dataOrganizationByID?.maSoThue}</Typography>
                            </Box>
                            <Box
                                display='flex'
                                justifyContent='space-between'
                                alignItems='center'
                                width='100%'
                            >
                                <Typography color={theme.palette.text.primary} fontWeight='bold'>Huyện</Typography>
                                <Typography fontSize={14}>{renderDataHuyen(dataOrganizationByID?.huyenID!)}</Typography>
                            </Box>
                            <Box
                                display='flex'
                                justifyContent='space-between'
                                alignItems='center'
                                width='100%'
                            >
                                <Typography color={theme.palette.text.primary} fontWeight='bold'>Tỉnh</Typography>
                                <Typography fontSize={14}>{renderDataTinh(dataOrganizationByID?.tinhID!)}</Typography>
                            </Box>
                            <Box
                                display='flex'
                                justifyContent='space-between'
                                alignItems='center'
                                width='100%'
                            >
                                <Typography color={theme.palette.text.primary} fontWeight='bold'>Địa chỉ</Typography>
                                <Typography fontSize={14}>{dataOrganizationByID?.diaChi}</Typography>

                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={12} lg={12} xl={9}>
                        <Box
                            display='flex'
                            flexDirection='column'
                            justifyContent='center'
                            alignItems='flex-start'
                            width='100%'
                            bgcolor={theme.palette.background.paper}
                            px={3}
                            py={3}
                        >
                            <Box
                                display='flex'
                                justifyContent='space-between'
                                alignItems='center'
                            >
                                <Typography pb={3} variant="h5" color={theme.palette.primary.main}>Thông tin cán bộ</Typography>
                            </Box>
                            <Box display='flex' justifyContent='space-between' alignItems='center' width='100%'>
                                <SearchNoButtonSection handleContentSearch={setContentSearch} contentSearch={contentSearch} />
                                <StyledButton
                                    onClick={() => setOpen(true)}
                                    variant='contained'
                                    size='large'
                                >
                                    Thêm cán bộ
                                </StyledButton>
                                <OfficersDialog title="Thêm cán bộ" defaulValue={null} id={id.id} isInsert handleOpen={setOpen} open={open} />
                            </Box>
                            <TableOfficers rows={filterDataOrganization} isAdmin={true} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </AdminLayout>
    )
}
export default OfficersPage