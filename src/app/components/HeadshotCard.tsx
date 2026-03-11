import React from 'react';

interface HeadshotCardProps {
  imageUrl?: string;
  name: string;
  description: string;
  title?: string;
  department?: string;
  status?: string;
  layout?: 'vertical' | 'horizontal';
}

export function HeadshotCard({
  imageUrl,
  name,
  description,
  title,
  department,
  status,
  layout = 'vertical',
}: HeadshotCardProps) {
  const isVertical = layout === 'vertical';

  return (
    <div
      className={`bg-white transition-all duration-300 hover:shadow-xl ${
        isVertical ? 'w-[320px]' : 'w-full max-w-[480px]'
      }`}
      style={{
        borderRadius: '16px',
        padding: isVertical ? '32px' : '24px',
        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04)',
      }}
    >
      <div className={`flex ${isVertical ? 'flex-col items-center text-center' : 'flex-row items-start gap-4'}`}>
        {/* Avatar */}
        <div
          className={`flex-shrink-0 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 ${
            isVertical ? 'mb-5' : ''
          }`}
          style={{
            width: isVertical ? '80px' : '64px',
            height: isVertical ? '80px' : '64px',
            borderRadius: '50%',
          }}
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-2xl font-medium">
              {name.charAt(0).toUpperCase()}
            </div>
          )}
        </div>

        {/* Content */}
        <div className={`flex-1 ${isVertical ? 'w-full' : ''}`}>
          {/* Name */}
          <h3
            className="mb-1"
            style={{
              fontSize: isVertical ? '20px' : '18px',
              fontWeight: '600',
              color: '#1d1d1f',
              lineHeight: '1.3',
              letterSpacing: '-0.01em',
            }}
          >
            {name}
          </h3>

          {/* Title/Department */}
          {(title || department) && (
            <div
              className="mb-3"
              style={{
                fontSize: '14px',
                fontWeight: '500',
                color: '#6e6e73',
                lineHeight: '1.4',
              }}
            >
              {title}
              {title && department && ' • '}
              {department}
            </div>
          )}

          {/* Description */}
          <p
            style={{
              fontSize: '14px',
              fontWeight: '400',
              color: '#86868b',
              lineHeight: '1.5',
              marginBottom: status ? '12px' : '0',
            }}
          >
            {description}
          </p>

          {/* Status Badge */}
          {status && (
            <div className="inline-flex items-center gap-2 mt-3">
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{
                  backgroundColor: status.toLowerCase() === 'active' ? '#34c759' : '#8e8e93',
                }}
              />
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: '500',
                  color: '#6e6e73',
                }}
              >
                {status}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
