import React from 'react';
import { motion } from 'framer-motion';

const PageWrapper = ({ children, className = '', style = {} }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
