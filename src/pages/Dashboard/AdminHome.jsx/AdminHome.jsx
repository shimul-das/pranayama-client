import React from 'react'
import useAuth from '../../../hooks/useAuth'
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import { Helmet } from 'react-helmet-async';

const AdminHome = () => {
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure('/admin-stats');
            return res.data
        }
    })
    return (
        <div className='w-full m-4'>
            <Helmet>
                <title>Pranayama | Admin Home</title>
            </Helmet>
            <h2 className='text-3xl'>Hi! Admin, {user.displayName}</h2>
        </div>
    )
}

export default AdminHome