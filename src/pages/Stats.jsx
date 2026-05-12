import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const Stats = () => {
  
  const data = [
    { name: 'Call', value: 45 },
    { name: 'Text', value: 30 },
    { name: 'Video', value: 25 },
  ];

  
  const COLORS = ['#2D4A3E', '#8B5CF6', '#34A853'];

  return (
    <div className="bg-[#F9FAFB] min-h-screen py-12 px-4 md:px-10">
      <div className="max-w-5xl mx-auto">
        
    
        <h1 className="text-4xl font-black text-[#111827] mb-8">Friendship Analytics</h1>

        
        <div className="bg-white rounded-xl border border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.02)] p-8 md:p-12">
          
          <h2 className="text-[#2D4A3E] font-bold text-lg mb-10">By Interaction Type</h2>

          <div className="h-[400px] w-full flex justify-center items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={100}   
                  outerRadius={140}
                  paddingAngle={8}   
                  dataKey="value"
                  stroke="none"       
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                
                <Legend 
                  verticalAlign="bottom" 
                  align="center"
                  iconType="circle"
                  iconSize={10}
                  formatter={(value) => (
                    <span className="text-gray-500 font-medium text-sm px-2">{value}</span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;