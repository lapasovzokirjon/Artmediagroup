'use client';

import { useState } from 'react';

export default function LeadForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    business: '',
    service: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // URL dan UTM kodlarini o'qib olish
  function getUtmData() {
    if (typeof window === 'undefined') return {};
    const p = new URLSearchParams(window.location.search);
    return {
      utm_source: p.get('utm_source') || '',
      utm_medium: p.get('utm_medium') || '',
      utm_campaign: p.get('utm_campaign') || '',
      utm_content: p.get('utm_content') || '',
      utm_term: p.get('utm_term') || '',
      page_url: window.location.href,
    };
  }

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (error) setError('');
  };

  const handleSubmit = async () => {
    if (!form.name.trim()) {
      setError('Iltimos, ismingizni kiriting');
      return;
    }
    if (!form.phone.trim()) {
      setError('Iltimos, telefon raqamingizni kiriting');
      return;
    }
    if (!form.business.trim()) {
      setError('Iltimos, biznesingizni kiriting');
      return;
    }
    if (!form.service) {
      setError('Iltimos, xizmat turini tanlang');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, ...getUtmData() }),
      });

      if (!res.ok) {
        throw new Error('Serverga yuborishda xatolik');
      }

      // Meta Pixel - Lead event (brauzer tomonida)
      if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
        window.fbq('track', 'Lead', {
          content_name: 'Art Media Group konsultatsiya',
        });
      }

      setSuccess(true);
    } catch (e) {
      setError('Xatolik yuz berdi. Iltimos, qaytadan urinib ko\u2019ring.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="form-section">
        <p className="form-intro">
          Bilbord, bo&apos;rtma harflar, banner, stend va statuetka.{' '}
          <b>Sifatli reklama mahsulotlari — bepul konsultatsiya oling!</b>
        </p>
        <div className="form-card">
          <div className="success-box">
            <div className="success-check">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h3>Rahmat, qabul qilindi!</h3>
            <p>
              Mutaxassislarimiz tez orada siz bilan bog&apos;lanishadi.
              <br />
              Telefoningizni yoqiq tuting!
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="form-section">
      <p className="form-intro">
        Bilbord, bo&apos;rtma harflar, banner, stend va statuetka.{' '}
        <b>Sifatli reklama mahsulotlari — bepul konsultatsiya oling!</b>
      </p>
      <div className="form-card">
        <div className="form-head">
          <h2>Bepul konsultatsiya</h2>
          <p>
            Ma&apos;lumotlaringizni qoldiring — <b>tez orada</b> bog&apos;lanamiz!
          </p>
        </div>

        <div className="input-field">
          <input
            type="text"
            placeholder="Ismingiz"
            value={form.name}
            onChange={(e) => handleChange('name', e.target.value)}
          />
        </div>

        <div className="input-field">
          <input
            type="tel"
            placeholder="Telefon raqamingiz"
            value={form.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
          />
        </div>

        <div className="input-field">
          <input
            type="text"
            placeholder="Qanday biznes bilan shug'ullanasiz?"
            value={form.business}
            onChange={(e) => handleChange('business', e.target.value)}
          />
        </div>

        <div className="input-field">
          <select
            value={form.service}
            onChange={(e) => handleChange('service', e.target.value)}
          >
            <option value="">Qaysi xizmat kerak?</option>
            <option value="Bilbord">Bilbord</option>
            <option value="Bo'rtma harflar">Bo&apos;rtma harflar</option>
            <option value="Banner">Banner</option>
            <option value="Stend">Stend</option>
            <option value="Statuetka">Statuetka</option>
            <option value="Boshqa / Maslahat">Boshqa / Maslahat</option>
          </select>
        </div>

        {error && <div className="err-text">{error}</div>}

        <button className="submit-btn" onClick={handleSubmit} disabled={loading}>
          {loading ? (
            <>
              <span className="spinner"></span> Yuborilmoqda...
            </>
          ) : (
            <>Bepul konsultatsiya oling</>
          )}
        </button>

        <div className="secure">🔒 Ma&apos;lumotlaringiz xavfsiz va maxfiy</div>
      </div>
    </div>
  );
}
