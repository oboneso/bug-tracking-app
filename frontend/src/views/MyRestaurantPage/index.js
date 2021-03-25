/** @format */

import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import {
	SaladBar,
	SodaMachine,
	LuxurySilverwareTray,
	SilverwareTray,
	PopcornMachine,
	BigTipJar,
	CandyBowl,
	DessertBar,
	CoffeeMachine,
	CandyMachine,
	Appliances,
	Furniture,
	Decor,
	PenthouseBarstool,
	PenthouseCounterCorner,
	PenthouseCounter,
	PenthouseTable,
	PenthouseChair,
	FuturisticChair,
	FuturisticBarstool,
	FuturisticCounter,
	FuturisticCornerCounter,
	FuturisticTable,
	CorruptedRoyalTable,
	CorruptedRoyalChair,
	SkyBlueBooth,
	RoyalTable,
	RoyalChair,
	SantasSleigh,
	CardboardEternalStatue,
	ModernSign,
	PlatinumPlayButton,
	GoldPlayButton,
	SilverPlayButton,
	PenthouseRope,
	WoodenSign,
	ArcadeMachine,
	ArcadeMachinePaintball,
	ChristmasTree,
	CozyFireplace,
	MarketCrashCactus,
	MoneyHedge,
	StackOfPresents,
	HauntedWell,
	DeadPlant,
	HauntedCoffin,
	LuxurySign,
	DiscoBall,
	HauntedStatue,
	HauntedPumpkin,
	Snowman,
	HappyPumpkin,
	Pumpkin,
	Gravestone,
	Cauldron,
} from './variables';

const MyRestaurantPage = () => {
	const [category, setCategory] = useState('');
	const [item, setItem] = useState('');
	const [priceInput, setPriceInput] = useState('');
	console.log(category);
	console.log(item);
	const changeHandler = (event) => {
		setCategory(event.target.value);
		setItem('');
	};

	const itemChangeHandler = (event) => {
		setPriceInput('');
		setItem(event);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		console.log(event);
	};

	return (
		<>
			<div>
				<label>Category</label>
				<select onChange={(event) => changeHandler(event)}>
					<option value=''>Choose Category</option>
					<Appliances />
					<Furniture />
					<Decor />
				</select>
			</div>
			{category === 'Appliances' ? (
				<div>
					<span>
						<label>Item</label>
						<select onChange={(e) => itemChangeHandler(e.target.value)}>
							<option value=''>Choose Item</option>
							<SaladBar />
							<SodaMachine />
							<LuxurySilverwareTray />
							<SilverwareTray />
							<PopcornMachine />
							<BigTipJar />
							<CandyBowl />
							<DessertBar />
							<CoffeeMachine />
							<CandyMachine />
						</select>
					</span>
				</div>
			) : category === 'Furniture' ? (
				<div>
					<span>
						<label>Item</label>
						<select onChange={(e) => itemChangeHandler(e.target.value)}>
							<option value=''>Choose Item</option>
							<PenthouseBarstool />
							<PenthouseCounterCorner />
							<PenthouseCounter />
							<PenthouseTable />
							<PenthouseChair />
							<FuturisticChair />
							<FuturisticBarstool />
							<FuturisticCounter />
							<FuturisticCornerCounter />
							<FuturisticTable />
							<CorruptedRoyalTable />
							<CorruptedRoyalChair />
							<SkyBlueBooth />
							<RoyalTable />
							<RoyalChair />
							<SantasSleigh />
						</select>
					</span>
				</div>
			) : category === 'Decor' ? (
				<div>
					<span>
						<label>Decor</label>
						<select onChange={(e) => itemChangeHandler(e.target.value)}>
							<option value=''>Choose Item</option>
							<CardboardEternalStatue />
							<ModernSign />
							<PlatinumPlayButton />
							<GoldPlayButton />
							<SilverPlayButton />
							<PenthouseRope />
							<WoodenSign />
							<ArcadeMachine />
							<ArcadeMachinePaintball />
							<ChristmasTree />
							<CozyFireplace />
							<MarketCrashCactus />
							<MoneyHedge />
							<StackOfPresents />
							<HauntedWell />
							<DeadPlant />
							<HauntedCoffin />
							<LuxurySign />
							<DiscoBall />
							<HauntedStatue />
							<HauntedPumpkin />
							<Snowman />
							<HappyPumpkin />
							<Pumpkin />
							<Gravestone />
							<Cauldron />
						</select>
					</span>
				</div>
			) : null}

			{item ? (
				<form onSubmit={(event) => submitHandler(event)}>
					<label>Price Per Unit: $ </label>
					<NumberFormat
						placeholder='Number Format Input looses focus'
						isNumericString={true}
						thousandSeparator={true}
						value={priceInput}
						onValueChange={(vals) => setPriceInput(vals.formattedValue)}
					/>
					<label>
						{priceInput.length < 6 && priceInput.length > 0 ? (
							<div>Please enter an amount greater than $99,999</div>
						) : null}
					</label>
					<input type='submit' value='Submit' />
				</form>
			) : null}
		</>
	);
};

export default MyRestaurantPage;
