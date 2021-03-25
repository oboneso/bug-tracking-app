/** @format */

import React, { useState } from 'react';
import { Tab, Nav, Button, Modal } from 'react-bootstrap';
import Conversations from 'components/Conversations';
import Contacts from 'components/Contacts';
import NewConversationModal from 'components/Modals/NewConversationModal';
import NewContactModal from 'components/Modals/NewContactModal';

const CONVERSATIONS_KEY = 'conversations';
const CONTACTS_KEY = 'contacts';

const ContactsPage = () => {
	const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);

	const conversationsOpen = activeKey === CONVERSATIONS_KEY;

	return (
		<div className='d-flex' style={{ height: '80vh' }}>
			<div className='d-flex flex-column' style={{ width: '250px' }}>
				<Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
					<Nav variant='tabs'>
						<Nav.Item>
							<Nav.Link eventKey={CONVERSATIONS_KEY}>Conversations</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
						</Nav.Item>
					</Nav>
					<Tab.Content className='border-right overflow-auto flex-grow-1'>
						<Tab.Pane eventKey={CONVERSATIONS_KEY}>
							<Conversations />
						</Tab.Pane>
					</Tab.Content>
					<Tab.Content>
						<Tab.Pane eventKey={CONTACTS_KEY}>
							<Contacts />
						</Tab.Pane>
					</Tab.Content>
					<Button className='rounded-0'>
						{conversationsOpen ? 'New Conversation' : 'New Contact'}
					</Button>
				</Tab.Container>
				<Modal>{conversationsOpen ? <NewConversationModal /> : <NewContactModal />}</Modal>
			</div>
		</div>
	);
};

export default ContactsPage;
