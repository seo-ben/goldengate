import React from 'react';
import { getWhatsAppUrl } from '../config/constants';
import { WhatsAppIcon } from './Icons';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] flex items-center justify-center p-6 bg-slate-50 text-center">
          <div className="max-w-md bg-white p-8 rounded-2xl border border-slate-200 shadow-xl space-y-4">
            <span className="text-4xl block">✨</span>
            <h2 className="text-xl font-bold font-serif text-slate-900">
              Golden Gate Décoration
            </h2>
            <p className="text-xs text-slate-600">
              Une mise à jour de la page est en cours. Cliquez ci-dessous pour recharger immédiatement la page.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                onClick={() => {
                  this.setState({ hasError: false });
                  window.location.reload();
                }}
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-amber-400 text-xs font-bold rounded-xl transition-all cursor-pointer"
              >
                Recharger la page
              </button>
              <a
                href={getWhatsAppUrl("Bonjour Golden Gate, je vous contacte depuis votre site.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <WhatsAppIcon size={14} />
                <span>Nous contacter</span>
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
