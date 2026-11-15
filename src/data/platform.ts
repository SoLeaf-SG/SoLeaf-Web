import { ClipboardList, Database, LayoutDashboard, MessageCircle, Sparkles, UserCheck } from 'lucide-react';

export type CapabilityStage = 'prototype' | 'mvp';

export const stageLabels: Record<CapabilityStage, string> = {
  prototype: 'Earlier prototype',
  mvp: 'In development',
};

export const journey = [
  { title: 'Receive an enquiry', text: 'A buyer asks about produce through the planned WhatsApp Business API integration.', icon: MessageCircle },
  { title: 'Interpret the request', text: 'The AI assistant identifies the items, quantities and missing details.', icon: Sparkles },
  { title: 'Verify stock and pricing', text: 'Evercrop checks available inventory and the prices the farm has set for that buyer.', icon: Database },
  { title: 'Capture the order', text: 'The request becomes a structured order with the buyer, items, quantities and checked prices.', icon: ClipboardList },
  { title: 'Escalate when needed', text: 'Farm staff review exceptions such as low stock, unclear requests and price overrides.', icon: UserCheck },
  { title: 'Hand off for fulfilment', text: 'Farm operators see validated orders and pending exceptions in a dashboard.', icon: LayoutDashboard },
];
