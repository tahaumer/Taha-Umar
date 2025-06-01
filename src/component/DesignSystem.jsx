import React from 'react';
import { motion } from 'framer-motion';

const ColorSwatch = ({ color, name, hexCode }) => (
  <motion.div
    transition={{ type: "spring", stiffness: 300 }}
    className="flex flex-col items-center"
  >
    <motion.div
      className={`w-20 h-20 rounded-xl mb-3 ${color}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    />
    <p className="font-firaCode text-sm font-medium">{name}</p>
    <p className="font-firaCode text-xs opacity-50">{hexCode}</p>
  </motion.div>
);

const FontSample = ({ fontFamily, fontClass, description }) => (
  <motion.div
    whileHover={{ x: 5 }}
    transition={{ duration: 0.2 }}
    className="mb-6"
  >
    <h3 className={`${fontClass} text-3xl mb-1`}>{fontFamily}</h3>
    <p className="font-firaCode text-sm opacity-70">{description}</p>
  </motion.div>
);

const DesignSystem = ({ fonts = [], colors = [], spacing = [] }) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
      className="py-20 max-w-[1200px] mx-auto md:px-5 p-3"
    >
      <motion.div variants={item} className="text-center mb-16">
        <h2 className="font-roman text-4xl mb-3">Design System</h2>
        <p className="max-w-[600px] mx-auto font-openSans opacity-70">
          A consistent design language used throughout the project to create a cohesive user experience.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div variants={item} className="space-y-8">
          <h3 className="font-firaCode font-semibold text-xl mb-6">Typography ——</h3>
          <div className="space-y-8">
            {fonts.map((font, index) => (
              <FontSample
                key={index}
                fontFamily={font.fontFamily}
                fontClass={font.fontClass}
                description={font.description}
              />
            ))}
          </div>
        </motion.div>

        <motion.div variants={item}>
          <h3 className="font-firaCode font-semibold text-xl mb-6">Color Palette ——</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {colors.map((color, index) => (
              <ColorSwatch
                key={index}
                color={color.bgClass}
                name={color.name}
                hexCode={color.hex}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {spacing.length > 0 && (
        <motion.div
          variants={item}
          className="mt-20 pt-10 border-t border-gray-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="col-span-1">
              <h3 className="font-firaCode font-semibold text-xl mb-3">Spacing System ——</h3>
              <p className="font-openSans opacity-70">
                Based on an 8px grid system for consistent spacing throughout the interface.
              </p>
            </div>

            <div className="col-span-2">
              <div className="flex space-x-4">
                {spacing.map((val, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className={`h-${val / 4} w-${val / 4} bg-gray-${200 + index * 100} rounded-md`}
                  />
                ))}
              </div>
              <div className="flex mt-3 text-sm font-firaCode opacity-70 space-x-9">
                {spacing.map((val, index) => (
                  <span key={index}>{val}px</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default DesignSystem;
