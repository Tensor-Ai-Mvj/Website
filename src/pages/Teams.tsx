import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { teamData, TeamYear, TeamMember } from '../data/teamData';
import TeamCard from '../components/TeamCard';
import TeamPhoto from '../components/TeamPhoto';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Teams = () => {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [expandedTeam, setExpandedTeam] = useState<string | null>(null);

  const handleYearClick = (year: string) => {
    setSelectedYear(year === selectedYear ? null : year);
    setExpandedTeam(null);
  };

  const handleTeamExpand = (category: string) => {
    setExpandedTeam(category === expandedTeam ? null : category);
  };

  const groupMembersByDepartment = (members: TeamMember[]) => {
    return members.reduce((acc, member) => {
      if (member.category === 'Sub-Team Members') {
        const dept = member.department || 'Other';
        if (!acc[dept]) acc[dept] = [];
        acc[dept].push(member);
      }
      return acc;
    }, {} as Record<string, TeamMember[]>);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden py-24">
      {/* Background Elements */}
      <div className="noise" />
      <div className="grid-background fixed inset-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-16 glitch"
          data-text="Our Teams"
        >
          Our Teams
        </motion.h1>

        {/* Timeline */}
        <div className="flex flex-col space-y-8">
          {teamData.map((yearData: TeamYear) => (
            <motion.div
              key={yearData.year}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <button
                onClick={() => handleYearClick(yearData.year)}
                className="w-full text-left"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-24 h-24 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/50 flex items-center justify-center hover-glow transition-all duration-300">
                    <span className="text-2xl font-bold">{yearData.year}</span>
                  </div>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent" />
                </div>
              </button>

              <AnimatePresence>
                {selectedYear === yearData.year && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    {/* Team Photo */}
                    <TeamPhoto photo={yearData.teamPhoto} year={yearData.year} />

                    {/* Core Team */}
                    <div className="mb-8">
                      <button
                        onClick={() => handleTeamExpand('Core Team')}
                        className="flex items-center space-x-2 text-xl font-semibold mb-4 hover:text-purple-400 transition-colors"
                      >
                        <span>Core Team</span>
                        {expandedTeam === 'Core Team' ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </button>
                      <AnimatePresence>
                        {expandedTeam === 'Core Team' && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                          >
                            {yearData.members
                              .filter(member => member.category === 'Core Team')
                              .map((member, index) => (
                                <TeamCard key={member.name} member={member} index={index} />
                              ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Sub Teams */}
                    <div>
                      <button
                        onClick={() => handleTeamExpand('Sub-Team Members')}
                        className="flex items-center space-x-2 text-xl font-semibold mb-4 hover:text-purple-400 transition-colors"
                      >
                        <span>Sub-Team Members</span>
                        {expandedTeam === 'Sub-Team Members' ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </button>
                      <AnimatePresence>
                        {expandedTeam === 'Sub-Team Members' && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="space-y-8"
                          >
                            {Object.entries(
                              groupMembersByDepartment(yearData.members)
                            ).map(([department, members]) => (
                              <div key={department}>
                                <h3 className="text-lg font-semibold mb-4 text-purple-400">
                                  {department}
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                  {members.map((member, index) => (
                                    <TeamCard key={member.name} member={member} index={index} />
                                  ))}
                                </div>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;