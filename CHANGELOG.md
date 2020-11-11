# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.1.0](https://github.com/uStudioTeam/brix-ui/compare/2.0.0...2.1.0) (2020-11-11)


### Bug Fixes

* **Badge:** parse `color` and `backgroundColor` from props ([7d320ea](https://github.com/uStudioTeam/brix-ui/commit/7d320ea1580265b8ae9198464beec8bca15f5c7d))
* **docs:** update `core` stories ([95e7f16](https://github.com/uStudioTeam/brix-ui/commit/95e7f162720ff9ecbcef3c5f79be2935af751ce7))
* **docs:** update `Grid` story ([eab8fa5](https://github.com/uStudioTeam/brix-ui/commit/eab8fa5792706ef24382b17f60558b6daa15493c))
* **docs:** update `Palette` story ([d055bc6](https://github.com/uStudioTeam/brix-ui/commit/d055bc615fe14cb37ca0fe9548ca229f8075c68c))
* **Tag:** parse `color` and `backgroundColor` from props ([eef7ad4](https://github.com/uStudioTeam/brix-ui/commit/eef7ad48a315cb99819cc3f1c07d3fb87eb8ed6b))
* **theme:** Make `ColorHelper.parseColor` return given value if it was not found in the palette or miscellaneous ([802d05d](https://github.com/uStudioTeam/brix-ui/commit/802d05d08e6db809820465a97727df1bdd3ea300)), closes [#260](https://github.com/uStudioTeam/brix-ui/issues/260)
* **utils:** replace unsupported in Safari lookbehind regex in `createCustomProperties` ([3b7674d](https://github.com/uStudioTeam/brix-ui/commit/3b7674d5c03bab47e6eb0aff9fcae00d60a41390))


### Features

* **Button:** add `justify-content: center` rule ([3f89c30](https://github.com/uStudioTeam/brix-ui/commit/3f89c30ee29fe8c6f8226cdd7eb52b9c6cf305eb))
* **Button:** remove `:not(:disabled)` modifier from styles ([799e60c](https://github.com/uStudioTeam/brix-ui/commit/799e60c0ba65e7cd384eccc8a202576547fecb83)), closes [#262](https://github.com/uStudioTeam/brix-ui/issues/262)
* **Cell:** update `Cell` component, now extending from `Flex` ([76622da](https://github.com/uStudioTeam/brix-ui/commit/76622da7231d9f64495b6b91224b8e8926a345e2))
* **core:** update `Block` and `Flex` implementations with new `Gapable` type & more ([d96277d](https://github.com/uStudioTeam/brix-ui/commit/d96277d3e33d56bb36660514b4303bb7d3205fd6))
* **Divider:** Widen the interface of `margin` and `padding` props ([1f303b5](https://github.com/uStudioTeam/brix-ui/commit/1f303b52570019266a1d9d28347315ec52b8fbee))
* **Grid:** update `Grid` component, now extending from `Flex` ([9e099f6](https://github.com/uStudioTeam/brix-ui/commit/9e099f68838fb6b86465cd2aea6f2d2eaabfe73e))
* **prop-types:** add `gapable` common prop-type ([baffbdc](https://github.com/uStudioTeam/brix-ui/commit/baffbdc81196d31f6e5de27283e23374e815855c))
* **Text:** add `weight` prop ([50bbd63](https://github.com/uStudioTeam/brix-ui/commit/50bbd636b791a42504c26228bbe8248e5f8fbc55)), closes [#261](https://github.com/uStudioTeam/brix-ui/issues/261)
* **Text:** add exports of `Strong`, `Em`, `Code` and `Pre` components ([aef738b](https://github.com/uStudioTeam/brix-ui/commit/aef738b11b0b591be53fa290c7bfb48a7d6d657a))
* **Text:** make `weight` prop more flexible ([cc4a221](https://github.com/uStudioTeam/brix-ui/commit/cc4a221c513ac0f673a60e1d7fa454cc8ea8ac32))
* **Text:** parse `color` prop like everywhere else ([99dbce1](https://github.com/uStudioTeam/brix-ui/commit/99dbce1d6cdfd5e168fd5e14fef4d7e2bef0510f)), closes [#266](https://github.com/uStudioTeam/brix-ui/issues/266)
* **theme:** darken `success-strong` colors on dark theme ([37da01e](https://github.com/uStudioTeam/brix-ui/commit/37da01e2f8e7c0895f19bcbf444abaf311081b86))
* **types:** add new `Gapable` type ([1edf014](https://github.com/uStudioTeam/brix-ui/commit/1edf014aeb3ca9a361998ab9d0ef0ed867ae9811))
* **types:** deprecate `FlexContainer` type due to its inconvenience and poor implementation ([db991b3](https://github.com/uStudioTeam/brix-ui/commit/db991b3aa8442967231b4dcdd6191d3c736ab9ba))
* **utils:** Move `parseIndent` function from `Block` to `utils` ([8153739](https://github.com/uStudioTeam/brix-ui/commit/8153739d37110bac7f0f286fe2f0239b91603c5c))





# [2.0.0](https://github.com/uStudioTeam/brix-ui/compare/v2.0.0-rc.1...2.0.0) (2020-11-05)

**2.0.0** 🥳🎉!

# [1.3.0-beta.4](https://github.com/uStudioTeam/brix-ui/compare/v1.3.0-beta.3...v1.3.0-beta.4) (2020-07-09)


### Bug Fixes

* **NumberInput:** Fix NaN, when input has only "-" ([382f4df](https://github.com/uStudioTeam/brix-ui/commit/382f4dfcd52095cf9b6a179f943162fb24f2f14a))
* **NumberInput:** Fix uncontrolled input, add validation on paste ([7f1093e](https://github.com/uStudioTeam/brix-ui/commit/7f1093e9589dd16f3afaddce7c433daab395377a))


### Features

* **Select, MultiSelect:** add `isDefaultOpen` props ([45e8c5c](https://github.com/uStudioTeam/brix-ui/commit/45e8c5cdec576692c1425a515a7fd30306dd2c23))



# [1.3.0-beta.3](https://github.com/uStudioTeam/brix-ui/compare/v1.3.0-beta.2...v1.3.0-beta.3) (2020-06-10)


### Bug Fixes

* **Flex:** fix flex export interface ([8b3b051](https://github.com/uStudioTeam/brix-ui/commit/8b3b05116b67ebc8e2334346e48bf2dc5a044dfd))



# [1.3.0-beta.2](https://github.com/uStudioTeam/brix-ui/compare/v1.3.0-beta.1...v1.3.0-beta.2) (2020-05-26)


### Bug Fixes

* **Input:** add `overflow: hidden` to the `Input` component ([c12caf4](https://github.com/uStudioTeam/brix-ui/commit/c12caf4a54dec169d95064570121938d62380fec))
* **Input:** pass proper `styled` prop to the `Input` component ([a6b8aa0](https://github.com/uStudioTeam/brix-ui/commit/a6b8aa09ee042fa5966bc77e178d708afe986334))
* **Select:** fix open dropdown height calculation formula ([46e64d8](https://github.com/uStudioTeam/brix-ui/commit/46e64d810e6932ada3e743265e4e04eb2ef41b04))



# [1.3.0-beta.1](https://github.com/uStudioTeam/brix-ui/compare/v1.2.5...v1.3.0-beta.1) (2020-05-20)


### Bug Fixes

* **Select:** fix autocomplete input rendering ([fb0d603](https://github.com/uStudioTeam/brix-ui/commit/fb0d6036b8ef20c7e2c18c6ae32fbea6877091bf))
* **Select:** show proper content depending on the autocomplete state ([0fc108a](https://github.com/uStudioTeam/brix-ui/commit/0fc108af0e5fa46f63b7eb6e2d638d2565140941))


### Features

* **Select:** add autocomplete ([7afcdcf](https://github.com/uStudioTeam/brix-ui/commit/7afcdcfd3a9e6dc98ec1878a7784584200187f67))
* **Select:** add proper searching through group select ([06903d2](https://github.com/uStudioTeam/brix-ui/commit/06903d2b5d2ee9c12fd9a092c31fb2c8de8d66ac))



## [1.2.5](https://github.com/uStudioTeam/brix-ui/compare/v1.2.4...v1.2.5) (2020-05-15)


### Bug Fixes

* **NumberInput:** Fix convert string value to number ([b7f9054](https://github.com/uStudioTeam/brix-ui/commit/b7f905479a9270504317c99b17acf9abcbc4ac13))



## [1.2.4](https://github.com/uStudioTeam/brix-ui/compare/v1.2.3...v1.2.4) (2020-05-08)


### Bug Fixes

* **Select:** fix group Select styles ([ccded23](https://github.com/uStudioTeam/brix-ui/commit/ccded232f75b8eb7256b45283ec980e9631eff94))



## [1.2.3](https://github.com/uStudioTeam/brix-ui/compare/v1.2.2...v1.2.3) (2020-05-04)


### Bug Fixes

* **NumberInput:** return `undefined` on empty field ([34ea0df](https://github.com/uStudioTeam/brix-ui/commit/34ea0df01d42bc477c1cb8a97bb7b8ef770985ab))



## [1.2.2](https://github.com/uStudioTeam/brix-ui/compare/v1.2.1...v1.2.2) (2020-05-04)


### Bug Fixes

* **Select, Input:** pass proper `styled` and `classNames` props ([ca27445](https://github.com/uStudioTeam/brix-ui/commit/ca27445c20f85144a1d5ecce917ce13501915b35))



## [1.2.1](https://github.com/uStudioTeam/brix-ui/compare/v1.2.0...v1.2.1) (2020-04-24)


### Bug Fixes

* **Checkbox:** fix Checkbox Container type ([76d84d7](https://github.com/uStudioTeam/brix-ui/commit/76d84d73561da842822931103fda522e1f6b7fad))
* **Flex:** fix Flex autocomplete ([56f759d](https://github.com/uStudioTeam/brix-ui/commit/56f759d7d500ec2eaf7615d3245923f60165a870))
* **Flex:** fix Flex margin prop type ([c8c8ebf](https://github.com/uStudioTeam/brix-ui/commit/c8c8ebf116cb442094b802eb4b54c4e938c0e82f))
* **Text:** fix Text type ext ([642ffcd](https://github.com/uStudioTeam/brix-ui/commit/642ffcd98e932b02cae29d36d5bde05386ea0955))



# [1.2.0](https://github.com/uStudioTeam/brix-ui/compare/v1.1.8...v1.2.0) (2020-04-23)


### Bug Fixes

* **Button:** fix button disable mobile styles ([#169](https://github.com/uStudioTeam/brix-ui/issues/169)) ([b71972a](https://github.com/uStudioTeam/brix-ui/commit/b71972a4d5709cc433c870769d75e4d001cd9351))
* **Documentation:** Fix Meta examples alignment on mobile ([#171](https://github.com/uStudioTeam/brix-ui/issues/171)) ([fb00dfc](https://github.com/uStudioTeam/brix-ui/commit/fb00dfcfd63cb3b9ed245646007c474a8dc8b984))
* **Modal:** fix modal width and add modal footer ([#159](https://github.com/uStudioTeam/brix-ui/issues/159)) ([9bb4551](https://github.com/uStudioTeam/brix-ui/commit/9bb4551515a8817f4caf44c6ab712133f01d81a7))
* **Select:** Fix MultiSelect value container height ([#173](https://github.com/uStudioTeam/brix-ui/issues/173)) ([e6c95b7](https://github.com/uStudioTeam/brix-ui/commit/e6c95b7c7cd70bbab8660e118c26158803a3774d))
* **Spinner:** fix warning when Spinner unmount change state ([#155](https://github.com/uStudioTeam/brix-ui/issues/155)) ([d773038](https://github.com/uStudioTeam/brix-ui/commit/d7730386b0d65afc95ff9fb6b8b465d2516cb308))
* **Text:** Add text align inherit to props ([#154](https://github.com/uStudioTeam/brix-ui/issues/154)) ([a60a272](https://github.com/uStudioTeam/brix-ui/commit/a60a2727d9381498a24544555452cebb31dbf4d5))
* **Text, Flex:** add html attribute ([#170](https://github.com/uStudioTeam/brix-ui/issues/170)) ([81ae46c](https://github.com/uStudioTeam/brix-ui/commit/81ae46cafd7e41290a0e67c8c440252d4791ad05))
* **Tooltip:** fix visible tooltip on  mobile device ([#175](https://github.com/uStudioTeam/brix-ui/issues/175)) ([dcb7ebd](https://github.com/uStudioTeam/brix-ui/commit/dcb7ebd6fcf61270ae4741fd631ee0e613b97c99))
* **Website:** fix visible link on  mobile IOS ([#174](https://github.com/uStudioTeam/brix-ui/issues/174)) ([a8f416b](https://github.com/uStudioTeam/brix-ui/commit/a8f416b9b2d8dd4ec01a6901cac72a37a78fc5e9))
* Fix displayName of styled components created by `sc` function ([#172](https://github.com/uStudioTeam/brix-ui/issues/172)) ([e1c7c7f](https://github.com/uStudioTeam/brix-ui/commit/e1c7c7fde91e130ba08019eb7cb2281ddf18ed6c))
* Fix Drawer z-index in docs ([#158](https://github.com/uStudioTeam/brix-ui/issues/158)) ([796e505](https://github.com/uStudioTeam/brix-ui/commit/796e505a18b99ebe37c1648652999ae2e5df1105))


### Features

* **Documentation:** add a note about tree-shaking ([#176](https://github.com/uStudioTeam/brix-ui/issues/176)) ([5230550](https://github.com/uStudioTeam/brix-ui/commit/523055003347e4c655780eb4c4e6a8c769eb2784))
* **Flex:** add isWrap prop ([#157](https://github.com/uStudioTeam/brix-ui/issues/157)) ([61b2246](https://github.com/uStudioTeam/brix-ui/commit/61b2246031def7dbdfd443f2c311d29310814efa))
* **Flex, Grid:** add blocks margins and paddings ([#146](https://github.com/uStudioTeam/brix-ui/issues/146)) ([55202f3](https://github.com/uStudioTeam/brix-ui/commit/55202f3b6215cfdbcadea3d7700d97373a4f48d5))
* **Flex, Grid:** added "as" prop for Flex and Grid components for render semantic tags ([#147](https://github.com/uStudioTeam/brix-ui/issues/147)) ([ab06995](https://github.com/uStudioTeam/brix-ui/commit/ab06995953b2e0bb14a9c31876bf4d868c4c57cf))
* **Text:** change default text alignment to 'inherit' ([#145](https://github.com/uStudioTeam/brix-ui/issues/145)) ([c8bbf20](https://github.com/uStudioTeam/brix-ui/commit/c8bbf20f6c722356fbc053fb137c48280a94f070))
* **Theme:** add white and black colors ([#149](https://github.com/uStudioTeam/brix-ui/issues/149)) ([a60c85b](https://github.com/uStudioTeam/brix-ui/commit/a60c85bfac51b68bb4b791cbae03266219af616f))
* **Website:** added sticky bottom footer ([#177](https://github.com/uStudioTeam/brix-ui/issues/177)) ([ec203e2](https://github.com/uStudioTeam/brix-ui/commit/ec203e242b168dd9bb849bfbf147ee78c2bf970d))
* Add new `styled` prop for beautiful extension of all styled-components ([#153](https://github.com/uStudioTeam/brix-ui/issues/153)) ([3736398](https://github.com/uStudioTeam/brix-ui/commit/37363980ea7e604ead88dad7f92603296c58427a))
* **Text:** added "color" prop for Text ([#150](https://github.com/uStudioTeam/brix-ui/issues/150)) ([660e6e2](https://github.com/uStudioTeam/brix-ui/commit/660e6e264d9f2b49de1b3aba1f75f807e486dbe2))
* **Theme:** added typing declaration for Theme ([#151](https://github.com/uStudioTeam/brix-ui/issues/151)) ([ff51a16](https://github.com/uStudioTeam/brix-ui/commit/ff51a1667c0aac5c9e0a52341ef3e1563626644a))
* **Website:** add units for number values in props table ([#148](https://github.com/uStudioTeam/brix-ui/issues/148)) ([5f0cc05](https://github.com/uStudioTeam/brix-ui/commit/5f0cc05834af7d6ad6a15dd64c6feea0a953146f))



## [1.1.8](https://github.com/uStudioTeam/brix-ui/compare/v1.1.7...v1.1.8) (2020-04-17)


### Bug Fixes

* Remove star exports from index ([7bdd0d3](https://github.com/uStudioTeam/brix-ui/commit/7bdd0d3c2a81e173812f639dc2c0397e3cc7672a))
* **Inputs:** fix defaultValue not working correctly on some inputs ([536a826](https://github.com/uStudioTeam/brix-ui/commit/536a8269e966e05bd6d07a8a0fd62824a349f955))
* **RadioGroup:** pass correct id to the radio inputs ([7dcc528](https://github.com/uStudioTeam/brix-ui/commit/7dcc5284642b61c3a24ea1854068cda2e79696e8))



## [1.1.7](https://github.com/uStudioTeam/brix-ui/compare/v1.1.6...v1.1.7) (2020-04-16)


### Bug Fixes

* **RadioGroup:** add correct names to radio inputs ([cd0b55a](https://github.com/uStudioTeam/brix-ui/commit/cd0b55a5736e3ae20c3d2bfded208d13a85d11ad))



## [1.1.6](https://github.com/uStudioTeam/brix-ui/compare/v1.1.5...v1.1.6) (2020-04-16)


### Bug Fixes

* **RadioGroup:** add first option as a defaultValue ([c5d87ce](https://github.com/uStudioTeam/brix-ui/commit/c5d87ce4bb60a621c0a6b360e9ff1a8b539b6104))



## [1.1.5](https://github.com/uStudioTeam/brix-ui/compare/v1.1.4...v1.1.5) (2020-04-15)


### Bug Fixes

* **Dropdown:** make optionally controllable Dropdown work ([cc48043](https://github.com/uStudioTeam/brix-ui/commit/cc48043b7aa5a05a308f41079bdb9212c757c808))
* **Spinner:** fix Spinner delay not properly resolving ([c089fe4](https://github.com/uStudioTeam/brix-ui/commit/c089fe4651b472491f8204bec823d098795e1caf)), closes [#140](https://github.com/uStudioTeam/brix-ui/issues/140)



## [1.1.4](https://github.com/uStudioTeam/brix-ui/compare/v1.1.3...v1.1.4) (2020-04-10)


### Bug Fixes

* **Grid:** Fix isContainer maxWidth calculation ([5e85730](https://github.com/uStudioTeam/brix-ui/commit/5e8573028199ed1127baf35133f11e7aa498a1c8))



## [1.1.3](https://github.com/uStudioTeam/brix-ui/compare/v1.1.2...v1.1.3) (2020-04-09)


### Bug Fixes

* **Grid:** Fix calculation of Grid and Cell templates ([925e6e1](https://github.com/uStudioTeam/brix-ui/commit/925e6e1b9df75e98e5e3683972f94691e5ec2301))
* **Grid:** Fix Cell calculations ([08a0699](https://github.com/uStudioTeam/brix-ui/commit/08a06991a79bd5976ea20df56e2075aba264e7fa))



## [1.1.2](https://github.com/uStudioTeam/brix-ui/compare/v1.1.1...v1.1.2) (2020-04-03)


### Bug Fixes

* **Grid:** fix children prop type validation, remove filtering from render function ([43f76a6](https://github.com/uStudioTeam/brix-ui/commit/43f76a6dbad90e7818eddad00bfce42770f12942))
* **Grid:** update children validation logic ([6c5a9df](https://github.com/uStudioTeam/brix-ui/commit/6c5a9df27b806df746b946b00accf04f4095d6cd))



## [1.1.1](https://github.com/uStudioTeam/brix-ui/compare/v1.1.0...v1.1.1) (2020-04-02)


### Bug Fixes

* Change Grid's children filtering and validation functions predicates ([885e2ac](https://github.com/uStudioTeam/brix-ui/commit/885e2ac13eab29d8254a315babe02e6c30b6700d))
* Remove filterChildren from Grid's render ([#128](https://github.com/uStudioTeam/brix-ui/issues/128)) ([81459ef](https://github.com/uStudioTeam/brix-ui/commit/81459ef8f708e5b49d2ee2638ab27c79ee117ea8))
* Replace progress element with div ([#126](https://github.com/uStudioTeam/brix-ui/issues/126)) ([46fc307](https://github.com/uStudioTeam/brix-ui/commit/46fc307402b593fea4e12c83a6cddcc505f76b22)), closes [#114](https://github.com/uStudioTeam/brix-ui/issues/114)


### Features

* Temporarily remove native Slider implementation ([#127](https://github.com/uStudioTeam/brix-ui/issues/127)) ([21727f6](https://github.com/uStudioTeam/brix-ui/commit/21727f6f9c7b3825153dce0b4a6781662d39daa8))



## [1.0.1](https://github.com/uStudioTeam/brix-ui/compare/v1.0.0...v1.0.1) (2020-03-30)



# [1.0.0](https://github.com/uStudioTeam/brix-ui/compare/52053bc5f69b0a912bfa8829eb2da8ef4ae08876...v1.0.0) (2020-03-25)


### Bug Fixes

* **NumberInput:** Number input validation ([#96](https://github.com/uStudioTeam/brix-ui/issues/96)) ([da8ea48](https://github.com/uStudioTeam/brix-ui/commit/da8ea48d538b4daacc8deb5b4f158c8ef2a2984d)), closes [#55](https://github.com/uStudioTeam/brix-ui/issues/55)
* Remove transition delay ([#95](https://github.com/uStudioTeam/brix-ui/issues/95)) ([ddfd8bb](https://github.com/uStudioTeam/brix-ui/commit/ddfd8bb482e6e9fed93549ff47ff9e8dd794c3c3)), closes [#65](https://github.com/uStudioTeam/brix-ui/issues/65)
* **Button:** Fix Button styles ([#77](https://github.com/uStudioTeam/brix-ui/issues/77)) ([2259da3](https://github.com/uStudioTeam/brix-ui/commit/2259da35846f47c32c9c3e9472ece155260728b1)), closes [#35](https://github.com/uStudioTeam/brix-ui/issues/35) [#36](https://github.com/uStudioTeam/brix-ui/issues/36)
* **Drawer, Website:** Fix drawer appearance and docs ([#83](https://github.com/uStudioTeam/brix-ui/issues/83)) ([56c2e45](https://github.com/uStudioTeam/brix-ui/commit/56c2e451510cb1e77405dc6a164ff00561d4b3d9)), closes [#40](https://github.com/uStudioTeam/brix-ui/issues/40) [#39](https://github.com/uStudioTeam/brix-ui/issues/39)
* **Dropdown:** Fix PropTypes ([#78](https://github.com/uStudioTeam/brix-ui/issues/78)) ([50e31f4](https://github.com/uStudioTeam/brix-ui/commit/50e31f4163b6fc540c2227c59741aba206c1c671)), closes [#43](https://github.com/uStudioTeam/brix-ui/issues/43)
* **EditableText, Website:** Change value and onChange in props table ([#88](https://github.com/uStudioTeam/brix-ui/issues/88)) ([8c3efe2](https://github.com/uStudioTeam/brix-ui/commit/8c3efe2554e53f7dbe7cb23a774d01f06189274c)), closes [#44](https://github.com/uStudioTeam/brix-ui/issues/44)
* **Grid:** Fix Grid and Cell children types ([#80](https://github.com/uStudioTeam/brix-ui/issues/80)) ([59acee1](https://github.com/uStudioTeam/brix-ui/commit/59acee15d9ff05bbb7e714dc4006906fa61702a3)), closes [#49](https://github.com/uStudioTeam/brix-ui/issues/49)
* **RadioGroup, Website:** Fix disabled styles, update docs ([#92](https://github.com/uStudioTeam/brix-ui/issues/92)) ([5f202dc](https://github.com/uStudioTeam/brix-ui/commit/5f202dc168962dc52f9ef2ae26e1ef80d35d0c90)), closes [#58](https://github.com/uStudioTeam/brix-ui/issues/58) [#63](https://github.com/uStudioTeam/brix-ui/issues/63)
* **Text, Website:** Change direction of examples container ([#76](https://github.com/uStudioTeam/brix-ui/issues/76)) ([6e4d58c](https://github.com/uStudioTeam/brix-ui/commit/6e4d58c7bba9eb66f8b82f91f313e0bec3e0446c)), closes [#68](https://github.com/uStudioTeam/brix-ui/issues/68)
* **TextArea:** Add type extending from HTMLTextAreaElement ([#87](https://github.com/uStudioTeam/brix-ui/issues/87)) ([2261b8f](https://github.com/uStudioTeam/brix-ui/commit/2261b8f07f41396ae4758c6bcb4d57d2b80e7b58)), closes [#59](https://github.com/uStudioTeam/brix-ui/issues/59)
* Add default value for direction ([#81](https://github.com/uStudioTeam/brix-ui/issues/81)) ([8dc270b](https://github.com/uStudioTeam/brix-ui/commit/8dc270b352ba1fac7b35bf3e1d94d72a9ab7b2f5)), closes [#46](https://github.com/uStudioTeam/brix-ui/issues/46)
* Fix opening of modal ([#84](https://github.com/uStudioTeam/brix-ui/issues/84)) ([8f6e1cc](https://github.com/uStudioTeam/brix-ui/commit/8f6e1cc5ac8ab1a0dc658425e862f354b936344f)), closes [#45](https://github.com/uStudioTeam/brix-ui/issues/45)
* Fix tab active cursor ([#79](https://github.com/uStudioTeam/brix-ui/issues/79)) ([3df04d7](https://github.com/uStudioTeam/brix-ui/commit/3df04d719de3d7d272af1577cf90f175777f5790)), closes [#67](https://github.com/uStudioTeam/brix-ui/issues/67)
* Remove unusable flex container ([#86](https://github.com/uStudioTeam/brix-ui/issues/86)) ([88645d5](https://github.com/uStudioTeam/brix-ui/commit/88645d5b99d39ff7ced0f64596a0d07421f17e10)), closes [#53](https://github.com/uStudioTeam/brix-ui/issues/53)
* rename Container styled-components, fix classNames props ([#72](https://github.com/uStudioTeam/brix-ui/issues/72)) ([9008523](https://github.com/uStudioTeam/brix-ui/commit/90085235447dfed9a35f925bcbbb9cffa38957b7)), closes [#37](https://github.com/uStudioTeam/brix-ui/issues/37) [#30](https://github.com/uStudioTeam/brix-ui/issues/30) [#31](https://github.com/uStudioTeam/brix-ui/issues/31) [#32](https://github.com/uStudioTeam/brix-ui/issues/32) [#38](https://github.com/uStudioTeam/brix-ui/issues/38) [#41](https://github.com/uStudioTeam/brix-ui/issues/41) [#42](https://github.com/uStudioTeam/brix-ui/issues/42) [#48](https://github.com/uStudioTeam/brix-ui/issues/48) [#57](https://github.com/uStudioTeam/brix-ui/issues/57) [#60](https://github.com/uStudioTeam/brix-ui/issues/60) [#61](https://github.com/uStudioTeam/brix-ui/issues/61) [#62](https://github.com/uStudioTeam/brix-ui/issues/62) [#66](https://github.com/uStudioTeam/brix-ui/issues/66)


### Features

* **Docs:** Added contributing docs ([#103](https://github.com/uStudioTeam/brix-ui/issues/103)) ([d300fc2](https://github.com/uStudioTeam/brix-ui/commit/d300fc27b1f394a9f870d46d301c749c7ddfea0f))
* **Hooks, Website:** Add useMediaQuery hook, add website responsiveness ([#97](https://github.com/uStudioTeam/brix-ui/issues/97)) ([93eaf3f](https://github.com/uStudioTeam/brix-ui/commit/93eaf3fce9ef90d5cb62c839c8f8e09f0b41c704)), closes [#56](https://github.com/uStudioTeam/brix-ui/issues/56) [#99](https://github.com/uStudioTeam/brix-ui/issues/99)
* **RadioGroup:** Change options API ([#82](https://github.com/uStudioTeam/brix-ui/issues/82)) ([8a289a0](https://github.com/uStudioTeam/brix-ui/commit/8a289a0a171789e9a877efd810ca376e2e533159))
* **Select:** Add placeholder prop ([#89](https://github.com/uStudioTeam/brix-ui/issues/89)) ([28eea8b](https://github.com/uStudioTeam/brix-ui/commit/28eea8bc08a4a51a5147901df7660405ac2ec83e))
* Add more steps for slider example ([#85](https://github.com/uStudioTeam/brix-ui/issues/85)) ([d804ae5](https://github.com/uStudioTeam/brix-ui/commit/d804ae5ab0a32f6a91328f42d8fa5ecf5eae6c89)), closes [#64](https://github.com/uStudioTeam/brix-ui/issues/64)
* Add StyledComponents decorator for Styled object ([#5](https://github.com/uStudioTeam/brix-ui/issues/5)) ([52053bc](https://github.com/uStudioTeam/brix-ui/commit/52053bc5f69b0a912bfa8829eb2da8ef4ae08876))
* Add target="_blank" to link in code example ([#74](https://github.com/uStudioTeam/brix-ui/issues/74)) ([b108011](https://github.com/uStudioTeam/brix-ui/commit/b108011dabc165dafbc5039bdaa9208c49a590a5)), closes [#70](https://github.com/uStudioTeam/brix-ui/issues/70)
* Change inputs label prop to name and id props ([#69](https://github.com/uStudioTeam/brix-ui/issues/69)) ([d5cf1cd](https://github.com/uStudioTeam/brix-ui/commit/d5cf1cd1e5e703ee705af0a9b9e9e0b8a8a131b5)), closes [#54](https://github.com/uStudioTeam/brix-ui/issues/54)
* **EditableText:** Refactor EditableText component ([#16](https://github.com/uStudioTeam/brix-ui/issues/16)) ([03fca55](https://github.com/uStudioTeam/brix-ui/commit/03fca550edad598f5c6d30f2bf4ae9e3145cec49))
* **Grid:** Complete Grid API and behaviour ([#1](https://github.com/uStudioTeam/brix-ui/issues/1)) ([7632c6e](https://github.com/uStudioTeam/brix-ui/commit/7632c6eaaf48b93d295086e012c0ccff001e3303))
* **Website:** Merge Grid breakpoint props ([#73](https://github.com/uStudioTeam/brix-ui/issues/73)) ([68c206d](https://github.com/uStudioTeam/brix-ui/commit/68c206d9380f650166dda6565746f8206c86844e))





# 2.0.0-rc.1 (2020-10-28)


### Bug Fixes

* **Button:** Import `ButtonProps` as a type ([edc472c](https://github.com/uStudioTeam/brix-ui/commit/edc472c5a56e6563712fc81d51b0bdb1665141d0))
* **Button:** Pass `isDisabled` prop to the styled component ([de6ba0e](https://github.com/uStudioTeam/brix-ui/commit/de6ba0ea02c389bda044f8084d63e44d36541062))
* **core:** Fix incorrect `use-disclose` behaviour ([7f2b059](https://github.com/uStudioTeam/brix-ui/commit/7f2b05907344870353bb1e6d27aa434043bd2aee))
* **core:** Pass more props to internal inputs ([de411b9](https://github.com/uStudioTeam/brix-ui/commit/de411b9a0073473f05afb8975f49428108935786))
* **Divider:** Fix `align` prop prop-type ([a6bdcf7](https://github.com/uStudioTeam/brix-ui/commit/a6bdcf743454fdd4c9ed91d8b91eaca5e05a1542))
* **Drawer:** Change component arrow function to named function expression ([7de77d4](https://github.com/uStudioTeam/brix-ui/commit/7de77d4beb5f033521c55248fa384a2a7cea9077))
* **fonts:** Add `prop-types` package path reference ([6162956](https://github.com/uStudioTeam/brix-ui/commit/6162956af23fe4f1cd1f20f26ccdcb589e042f58))
* **fonts:** Properly describe `Fonts` prop-types ([57c2ea9](https://github.com/uStudioTeam/brix-ui/commit/57c2ea95de5a409032d0a94b708e7f410718bda9))
* **prop-types:** Fix `record` type declaration ([7e57513](https://github.com/uStudioTeam/brix-ui/commit/7e57513e3334603d8995894dc6b6765ac24a7013))
* Fix `tsconfig` formatting script ([85a0102](https://github.com/uStudioTeam/brix-ui/commit/85a010266bcd837a3f0cb904919967e923797fdc))
* **core:** Fix incorrect `use-disclose` behaviour ([75c0748](https://github.com/uStudioTeam/brix-ui/commit/75c0748fdb19f9640ae0d5e58d23f044378cbd42))
* **prop-types:** Fix `refProp` implementation ([ea0d203](https://github.com/uStudioTeam/brix-ui/commit/ea0d203be569b26521eeb92a788678c9116ed034))
* **safeFallback:** Return condition when nothing else is specified ([0745a10](https://github.com/uStudioTeam/brix-ui/commit/0745a107c9707350b16ca2e901eaff48b29260c8))
* **Status:** Change element type in component declaration ([a7f5671](https://github.com/uStudioTeam/brix-ui/commit/a7f567153b23bc3a521fa7484c1e27bf19bd3fb4))
* **Tag:** Fix `CloseButton` alignment ([6f7cdca](https://github.com/uStudioTeam/brix-ui/commit/6f7cdcabe97a78f195a837e4cbe7883634055cdc))
* **TimePicker:** Correctly pass focus when focusing specific input ([e733636](https://github.com/uStudioTeam/brix-ui/commit/e73363666f1de98ae4f48ed63674850276b98058))
* **types:** Remove imports of `utils` ([81622e7](https://github.com/uStudioTeam/brix-ui/commit/81622e7dce40bc7b76935ff3dde2bfc5fac20d15))
* Update build pipeline for `fonts` ([c3377d4](https://github.com/uStudioTeam/brix-ui/commit/c3377d453bc8085db54345bdfcfedd10d6be1d62))
* **createCustomProperties:** Fix regex replace function ([99377f3](https://github.com/uStudioTeam/brix-ui/commit/99377f3aa865bbfa069bd3e3444a3b121b00cf9d))
* **Divider:** Fix `isInline` width ([ded6409](https://github.com/uStudioTeam/brix-ui/commit/ded6409ab8659a625163ebe7e615d8ae534d147e))
* **hooks:** Add missing hook dependencies ([b03b84e](https://github.com/uStudioTeam/brix-ui/commit/b03b84ed66806696884d9434545c347b2dd23f14))
* **Input:** Add fallback value, fix `valuemin`/`valuemax` display as `NaN` ([01b73b7](https://github.com/uStudioTeam/brix-ui/commit/01b73b7ab32e186ecad5fd6d64f87bfb36ad8ca0))
* **Input:** Add fallback value, fix `valuemin`/`valuemax` display as `NaN` ([513089c](https://github.com/uStudioTeam/brix-ui/commit/513089c698511ccd48c11375b4c214f38f59bcb2))
* **Select:** Fix workflow with placeholder ([3100682](https://github.com/uStudioTeam/brix-ui/commit/3100682912143ab20e0e3db65db1970af0844492))
* **Select:** Fix workflow with placeholder ([b26aae7](https://github.com/uStudioTeam/brix-ui/commit/b26aae79ee75b5a8d004d3da9aef2738eb25fafa))
* **Storybook:** Correctly define global decorator ([bb65d12](https://github.com/uStudioTeam/brix-ui/commit/bb65d124651c01b48f778d75ee8206a96bd1411c))
* **Storybook:** Correctly define global decorator ([a46fe70](https://github.com/uStudioTeam/brix-ui/commit/a46fe70b06a5d3785793466c27915bcd1cc4fbb1))
* **Storybook:** Fix `palette` story ([c3de2a9](https://github.com/uStudioTeam/brix-ui/commit/c3de2a9751e58f22a10e2b95e0651bfba715a541))
* **Storybook:** Minor layout fixes ([7f80efc](https://github.com/uStudioTeam/brix-ui/commit/7f80efc774a630b9dc39a3e8f05c8990c6a24bbe))
* **Storybook:** Minor layout fixes ([ab069e0](https://github.com/uStudioTeam/brix-ui/commit/ab069e08c4c44d1bc47a6ed7f4f43d8f71749860))
* **Tag:** Fix close icon size ([f96b0b1](https://github.com/uStudioTeam/brix-ui/commit/f96b0b1e977104e6e3d38a9549be9dee612d7bff))
* **Text:** Fix `as` and `variant` props passing to styles ([a470826](https://github.com/uStudioTeam/brix-ui/commit/a4708264981e5393f8cad253fdbd792916940d66))
* **Text:** fix `as` forwarding ([ab6fa17](https://github.com/uStudioTeam/brix-ui/commit/ab6fa179bc113eaa86fa35c164f3d93ad6cef01e))
* **theme:** Update `themeMode` feature interface ([9534cb0](https://github.com/uStudioTeam/brix-ui/commit/9534cb0c1e3b7002b57a405ee6f2a301e20baade))
* **theme:** Update `themeMode` feature interface ([6d5cf60](https://github.com/uStudioTeam/brix-ui/commit/6d5cf60c4d84ba67bb09ab5d3f472711204d9156))
* **TimePicker:** Fix implementations after running tests ([4a94e86](https://github.com/uStudioTeam/brix-ui/commit/4a94e8623756b31dfa130d7876b7f025841d0b50))
* **TimePicker:** Tweak the behaviour, update tests ([afa5bdb](https://github.com/uStudioTeam/brix-ui/commit/afa5bdb4b2706550be837b5e39a6d3cefea67ccb))
* **use-disclose:** Change `hasChanged` ref declaration ([305b397](https://github.com/uStudioTeam/brix-ui/commit/305b397c7456b044fee5126eafdd0bdd786aeac7))
* **useDelay:** Set `shouldRender` to `true` when no delay is specified ([9da6855](https://github.com/uStudioTeam/brix-ui/commit/9da6855ceea2b86baede131ff3b8b5a3ae11bd3a))
* **useDisclose:** Fix `useDisclose` and `Disclosable` components behaviour, add tests ([6736811](https://github.com/uStudioTeam/brix-ui/commit/67368118efd4f61c64bc56c09fd475e9facd5576))
* **useInputValue:** Add `HTMLTextAreaElement` to the `E` generic type union ([f3c0d91](https://github.com/uStudioTeam/brix-ui/commit/f3c0d91db01a78aedcda4e4d2da2818897ca3546))
* **useInputValue:** Persist original event ([dd0609c](https://github.com/uStudioTeam/brix-ui/commit/dd0609c92b5305a061e0240a52e7f0cef963537f))
* Add `hooks` as root for `jest` ([b9a1fc8](https://github.com/uStudioTeam/brix-ui/commit/b9a1fc82f3d80e19dfa8ca781a210f3aa9146636))
* **core:** Add forgotten `styles` props ([e89fcc7](https://github.com/uStudioTeam/brix-ui/commit/e89fcc7db5642f1acaf7db4e5967145aa5e8058f))
* **core:** Fix `Flex` and `Block` styled extension ([2cc6528](https://github.com/uStudioTeam/brix-ui/commit/2cc6528f6e6edd041534033baf211549a9a12ba9))
* **core:** Fix input's props typing ([1870a7b](https://github.com/uStudioTeam/brix-ui/commit/1870a7b773ce7f2cbc6f79a01e0b32b28a4241d9))
* **core:** Fix inputs props declarations and passing ([c4213f2](https://github.com/uStudioTeam/brix-ui/commit/c4213f2b8286ad7409f351efc5dab0e051bd820c))
* **Disclosure:** Fix `last-child` indent style selector ([3e1cbf2](https://github.com/uStudioTeam/brix-ui/commit/3e1cbf2bb89f64fe163a06d3b4348a440ec6b1af))
* **Discosure:** supply correct `isOpen` value to custom icon factory ([dc8a1ff](https://github.com/uStudioTeam/brix-ui/commit/dc8a1ff795a72b8fa9a3a4dac9aa1a7ab3c7579c))
* **Input:** Fix `handleChange` function, add accessibility props ([4faed1e](https://github.com/uStudioTeam/brix-ui/commit/4faed1e62c3b1f5a92f1acd4c71d3a96bd3c1c64))
* **prop-types:** Fix `extract` function typing ([d6e1bc8](https://github.com/uStudioTeam/brix-ui/commit/d6e1bc85414690505edcd77044cf58c44222b26c))
* Add fixes after linting ([acd119d](https://github.com/uStudioTeam/brix-ui/commit/acd119d07edf26e879cff5cd2031a4d4985e0621))
* Correctly reference styled components in props ([4b551c0](https://github.com/uStudioTeam/brix-ui/commit/4b551c002b45ae2999598e321f5ea9da094dafc3))
* Fix `IntrinsicComponent` type definition ([4e704ad](https://github.com/uStudioTeam/brix-ui/commit/4e704adce9fb269e18936ff4a25a2210ec2cba42))
* **block:** Setup correct vertical/horizontal indent order ([6b5d18a](https://github.com/uStudioTeam/brix-ui/commit/6b5d18a71ab02201ee545655dfafd44b0be608f1))
* **Disclosure:** supply correct `isOpen` value to custom icon factory ([710960d](https://github.com/uStudioTeam/brix-ui/commit/710960d73d036a85b8e5acf167fdc2cee3fc2de1))
* **flex:** Fix styling bugs ([ed73035](https://github.com/uStudioTeam/brix-ui/commit/ed73035ef963a55c45705de44cd244d63ae3ab2b))
* **grid:** Correctly destructure breakpoints from theme ([8435bcb](https://github.com/uStudioTeam/brix-ui/commit/8435bcb84bc6ad5fcd83910226f07d7720faa3ea))
* **grid:** Fix `useBreakpointProps` typing in `GridContainer` ([765dc12](https://github.com/uStudioTeam/brix-ui/commit/765dc12b07910fe3d142a9f567cafb3d796074de))
* **grid:** Update grid state with latest data ([d2ca58c](https://github.com/uStudioTeam/brix-ui/commit/d2ca58c97cc017299a7565a7bd3774771d08cad2))
* **palette:** Fix incorrect hsl formatting ([2a319e2](https://github.com/uStudioTeam/brix-ui/commit/2a319e2aac76d2f47f6416052b598be2164f5a51))
* **Tag:** Add color usage from const ([38ecd45](https://github.com/uStudioTeam/brix-ui/commit/38ecd45428253e6affc8ef3bba5e3504bca4655a))
* **Tag:** Change color control from text to color in story ([a0d40fa](https://github.com/uStudioTeam/brix-ui/commit/a0d40fa28fe5a54a348001c2a39047d748114b09))
* **Tag:** Fix alignment for tag ([d2fc341](https://github.com/uStudioTeam/brix-ui/commit/d2fc341f2e3c404ff5a1f7f82cc85e2b4415fec8))
* **Tag:** fix close button border-radius ([8248095](https://github.com/uStudioTeam/brix-ui/commit/8248095257b37409cca1e47afba70626ab09349a))
* **Tag:** fix close button border-radius ([c179f44](https://github.com/uStudioTeam/brix-ui/commit/c179f44f1a56beef7e76f3a5e7447d157b0f205c))
* **Tag:** Fix extends type ([8913a1e](https://github.com/uStudioTeam/brix-ui/commit/8913a1e183f94ca34708a37b8eb7655a45b01ac5))
* **Tag:** Fix getting color from default theme ([8043135](https://github.com/uStudioTeam/brix-ui/commit/8043135a32f596510858a7822eb9d0a357c01a22))
* **Tag:** Fix import order ([0ffbbca](https://github.com/uStudioTeam/brix-ui/commit/0ffbbca005e1db4c0c50ee43ca57a4abbe3d7032))
* **Tag:** Fix story description and styles ([dc20301](https://github.com/uStudioTeam/brix-ui/commit/dc20301adf6b4d7ca75060b414581d820b2d2600))
* **Tag:** Fix styles after review ([150c8ff](https://github.com/uStudioTeam/brix-ui/commit/150c8ff9f4433fc15671453b062ac511ae297a08))
* **Tag:** Fix tag padding and hover effect ([791a6b1](https://github.com/uStudioTeam/brix-ui/commit/791a6b1a9c3a91f3172e8f0683607b94c8f38003))
* **Tag:** Fix tag padding and refactor code ([ad88081](https://github.com/uStudioTeam/brix-ui/commit/ad880813877f83138a6e339502d80356b4cc3529))
* **Tag:** Fix working with alpha chanel in colors ([7ca4f94](https://github.com/uStudioTeam/brix-ui/commit/7ca4f94b888a239cab7e2ec2e2e264b982c4df98))
* **Tag:** Refactor tag ([c8ee641](https://github.com/uStudioTeam/brix-ui/commit/c8ee6410a572cf83f68e884148230655efcce9c4))
* **Tag:** Remove margin for last child ([0c18af7](https://github.com/uStudioTeam/brix-ui/commit/0c18af7629a17329bfdafab051b3f1f331c388e3))
* **text:** Apply correct css property for `italic` decoration ([c521454](https://github.com/uStudioTeam/brix-ui/commit/c521454614b941c3db7827d02c7ab2c20f41b3c5))
* **theme:** Make `ThemeProvider` `theme` prop optional ([f742a6b](https://github.com/uStudioTeam/brix-ui/commit/f742a6be391863036901deea85602a4dca2501ec))
* **Theme:** Remove excess import ([93dc334](https://github.com/uStudioTeam/brix-ui/commit/93dc33490698251e801c2f87f1de1f9f66e385c5))
* **Utils:** Fix `apply-polymorphic-function-prop` typing ([6f5e484](https://github.com/uStudioTeam/brix-ui/commit/6f5e484f780155155b295570ddc9afcaac97908e))
* **Utils:** Fix `apply-polymorphic-function-prop` typing ([eea386d](https://github.com/uStudioTeam/brix-ui/commit/eea386d72f17eef47eb78dcd34c669ccfde4b4d3))
* **Utils:** Fix `apply-polymorphic-function-prop` typing ([0b43f83](https://github.com/uStudioTeam/brix-ui/commit/0b43f83d5b9c9924c2f2e3639d5266049697c8a0))
* Add lib for convert colors and fix color transformer ([4a120ae](https://github.com/uStudioTeam/brix-ui/commit/4a120ae017c5c2289bde36af557d7115c07113f9))
* Add missing `prop-types` ([cf32ce8](https://github.com/uStudioTeam/brix-ui/commit/cf32ce8e700f5f1dd8dca587ebf5c9617e8c66cd))
* Add missing `styles` props ([0bda03d](https://github.com/uStudioTeam/brix-ui/commit/0bda03d0d4166c3b7798345a0411d988b2bd5e85))
* Add ThemeProvider for tests ([7afc061](https://github.com/uStudioTeam/brix-ui/commit/7afc06169e811a60c33f04be5f39bcc8e0f3a751))
* Apply new transition variables, fix `useUnmountOnExit` behaviour ([04cbd07](https://github.com/uStudioTeam/brix-ui/commit/04cbd078e53e87b53e55e2d78f5e0c7d217a4aaf))
* Fix error if props?.[font] is undefined ([bd0ad78](https://github.com/uStudioTeam/brix-ui/commit/bd0ad78ba9b160645e110f3a2c037541eca57b1a))
* Fix root build script path ([18c9a87](https://github.com/uStudioTeam/brix-ui/commit/18c9a8772903a4581d261b467cc73efd208cc134))
* Fix usage of `extract` prop-types function ([ef0efdf](https://github.com/uStudioTeam/brix-ui/commit/ef0efdfcfd9a670ed4c49b1fea61fe20d150eca1))
* Properly load svg icons ([cdc4de4](https://github.com/uStudioTeam/brix-ui/commit/cdc4de4ccf0b74725d165f5ef13d03b2eb66b1f8))
* Remove `styles` prop due to typing inconsistency ([acc341d](https://github.com/uStudioTeam/brix-ui/commit/acc341d858de21c26e284c3e8ca61347b0c1e6a0))
* **theme:** Remove inappropriate import ([7037b80](https://github.com/uStudioTeam/brix-ui/commit/7037b80e8386d7ba44d08a5a490044da5fd3408c))
* **utils:** Add correct function arguments typing for `apply-polymorphic-function-prop` ([9f59afd](https://github.com/uStudioTeam/brix-ui/commit/9f59afd93dddf8cb96276394cc75d0afc26ec3dd))


### Features

* **Alert:** Add `Alert` component ([0aed09b](https://github.com/uStudioTeam/brix-ui/commit/0aed09b94fac998d8a62061287d94cd25ee300f5))
* **Alert:** Make `Alert` display `inline-flex`, update styles and story ([c15e079](https://github.com/uStudioTeam/brix-ui/commit/c15e079e3f99f60428bb23932c250ae4e58a73fc))
* **Alert:** Make `Alert` display `inline-flex`, update styles and story ([5f14a50](https://github.com/uStudioTeam/brix-ui/commit/5f14a50f3521f92c58f1ee44151815f45c509427))
* **Alert:** Update `Status` and `CloseButton` positioning ([66ba216](https://github.com/uStudioTeam/brix-ui/commit/66ba21695f42836f94ba4c0732883745d18a19a4))
* **Badge:** Export `BadgePosition` type ([eb045e9](https://github.com/uStudioTeam/brix-ui/commit/eb045e929dc5bccdf444824d95ee4b7938e39b14))
* **Button:** Add local css variable for `height` ([03c81fc](https://github.com/uStudioTeam/brix-ui/commit/03c81fcc2cd8c6a714fc01806e4f0a29f5cb6c5a))
* **Button:** change `borderRadius` prop to `isRounded`, add fixed height ([baf0eeb](https://github.com/uStudioTeam/brix-ui/commit/baf0eeb104eaf9844863af12e96c50a0b9f1fbc8))
* **Checkbox:** Add `Checkbox` component ([7539e45](https://github.com/uStudioTeam/brix-ui/commit/7539e45639fc9a42358cbdb0613db505ea41fe5b))
* **core:** Add `Affix` internal component ([011c5be](https://github.com/uStudioTeam/brix-ui/commit/011c5be0aac7176b4a771fc3d8a880349ca712d7))
* **core:** Add `aria-expanded` attribute to disclosable components ([1dc4697](https://github.com/uStudioTeam/brix-ui/commit/1dc469733875a68fb03e13f271c9976bfab2d583))
* **core:** Add `use-disclose` and `use-unmount-on-exit` hooks ([9f23b2f](https://github.com/uStudioTeam/brix-ui/commit/9f23b2f202c00c9c3f216dfceb0349832a8450df))
* **core:** Add `valid` state styles for inputs ([8147b16](https://github.com/uStudioTeam/brix-ui/commit/8147b168feb172c8e70e92ee5354c3af7cfbe845))
* **core:** Add `valuemin`/`valuemax` aria attributes for `Input` ([acfcbdb](https://github.com/uStudioTeam/brix-ui/commit/acfcbdb40b094c94db0cf7b61a11340b6503ea23))
* **core:** Add input prop-types ([e7a72f4](https://github.com/uStudioTeam/brix-ui/commit/e7a72f40b998f98f0ae5502a7971c2c867777056))
* **core:** Add internal `Input` component ([1b55f09](https://github.com/uStudioTeam/brix-ui/commit/1b55f0934ee9bbad3feaacaf6569bf291686182e))
* **core:** Increase interactive area of `Checkbox` and `RadioButton` ([1a3862a](https://github.com/uStudioTeam/brix-ui/commit/1a3862a9acf2a3d06cdf8a2cec7e2ffb6d9a941d))
* **core:** Update `RadioGroup` story ([d4b883d](https://github.com/uStudioTeam/brix-ui/commit/d4b883dd75b5c15e529a5173550ac65a9a2591f0))
* **core:** Update `RadioGroup` story ([7c66ca8](https://github.com/uStudioTeam/brix-ui/commit/7c66ca86bf6e3807893629198132f62fe2bc885f))
* **core:** Update `use-value` implementation ([2b96db0](https://github.com/uStudioTeam/brix-ui/commit/2b96db0a02149066d77a885a725baf467010c1aa))
* **core:** Update `use-value` implementation ([ee00d38](https://github.com/uStudioTeam/brix-ui/commit/ee00d38d733e4027035a986995e907e0db600a9c))
* **core:** Update classNames ([2fe6484](https://github.com/uStudioTeam/brix-ui/commit/2fe6484326f8f9ce485d48ef859ca86dbb3b4250))
* **core:** Update internal `Input` styles ([1cdb2ce](https://github.com/uStudioTeam/brix-ui/commit/1cdb2ce14fb232a5e50da3c6c45b199fe97ab780))
* **Disclosure:** Move `Container` attrs to props ([dff3db3](https://github.com/uStudioTeam/brix-ui/commit/dff3db3392b9808c33664f831776c6fb23819a77))
* **Disclosure:** Move `Container` attrs to props ([4296f9a](https://github.com/uStudioTeam/brix-ui/commit/4296f9a51c1f7706297f32f5581e97db55a6e9c7))
* **Disclosure:** Update component with new functionality and typing ([cb1a2e2](https://github.com/uStudioTeam/brix-ui/commit/cb1a2e2e1be021d0b983754148d96fa86ea7bb70))
* **Disclosure:** Update styles and add `Stylable` story ([dc7a567](https://github.com/uStudioTeam/brix-ui/commit/dc7a5670a74931b8306e3d38a66e2b480ba28268))
* **Discosure:** Update styles and add `Stylable` story ([b16249f](https://github.com/uStudioTeam/brix-ui/commit/b16249f955e99f0b4fe723584c19956575c09bd8))
* **Divider:** Accept only `ReactElement` as children ([0489c85](https://github.com/uStudioTeam/brix-ui/commit/0489c85dd96666e2dd12bd5028824ac0004c1df2))
* **Divider:** Add `Divider` component ([187473b](https://github.com/uStudioTeam/brix-ui/commit/187473bced50745e2276c793b0563a704705939f))
* **Divider:** Change `align` prop's acceptable values ([97e575e](https://github.com/uStudioTeam/brix-ui/commit/97e575e9eec173d47091fc371d1b02402faeef1a))
* **Drawer:** Add `Drawer` component ([d2803d1](https://github.com/uStudioTeam/brix-ui/commit/d2803d1fb6f2d44ff186d6a324875cca91a1ea7d))
* **fonts:** Add prop-types ([495f9a2](https://github.com/uStudioTeam/brix-ui/commit/495f9a2acc3e1d9ed8720af910a587e5cd73d878))
* **fonts:** Update `fonts` package to provide a component with font-faces declarations ([dab1579](https://github.com/uStudioTeam/brix-ui/commit/dab15796e550881c8e194293611132517eb4199d))
* **Input:** Change padding to display text more or less in center ([51a3ef4](https://github.com/uStudioTeam/brix-ui/commit/51a3ef4675ae4454c7e8b89f26cd8115a1d0a478))
* **orUndefined:** Make the function accept any value type but convert it to boolean anyways ([17aa756](https://github.com/uStudioTeam/brix-ui/commit/17aa756d1c43e2547de0d2910636d0f4044356b7))
* **Portal:** Add internal `Portal` component ([daeb9ff](https://github.com/uStudioTeam/brix-ui/commit/daeb9ff393c707e0914027edfc7f36e13eb7aaad))
* **Portal:** move portal to `core` components ([30a445d](https://github.com/uStudioTeam/brix-ui/commit/30a445dbb5bc06851666eb27518f85e5a1415d3b))
* **RadioGroup:** Add `RadioGroup` component ([1bfc5bd](https://github.com/uStudioTeam/brix-ui/commit/1bfc5bde73b03f973d28996a8f9226cf03820838))
* **Select:** Add `Select` component ([5d3b2cc](https://github.com/uStudioTeam/brix-ui/commit/5d3b2ccf8f5b4d85252730817984a893fcd3e743))
* **Select:** Add missing attributes for placeholder option ([9829a42](https://github.com/uStudioTeam/brix-ui/commit/9829a4268136c3505c82e726d2e7561436288067))
* **Select:** Make `Select` affixable ([63f4da4](https://github.com/uStudioTeam/brix-ui/commit/63f4da446b269a55e78a1a2c899045da2bb3fcf9))
* **Skeleton:** Add `Skeleton` component ([8bc4fe5](https://github.com/uStudioTeam/brix-ui/commit/8bc4fe5bd5e1fdd535d8846095e47625b6847739))
* **Spinner:** Add `delay` prop ([2b6f544](https://github.com/uStudioTeam/brix-ui/commit/2b6f5448b0cb7076016c4b85e743d79e5d7bf9b3))
* **Spinner:** Add `prop-types` validation ([ceb0a09](https://github.com/uStudioTeam/brix-ui/commit/ceb0a09183d8f26776d919b478badf17786ffc51))
* **Spinner:** Add cursor `wait` ([d02c44f](https://github.com/uStudioTeam/brix-ui/commit/d02c44f6ee40e47032f548ca38c56c3a92cf216a))
* **Spinner:** Add Spinner component ([8aa9d2c](https://github.com/uStudioTeam/brix-ui/commit/8aa9d2cb93453044b30a3906e2ce53ee3a3311ef))
* **Spinner:** Add style optimizations ([a76aa90](https://github.com/uStudioTeam/brix-ui/commit/a76aa904730be1519f66b89284b4ff9379bc3225))
* **Spinner:** Make animatable property generic, swap `width` and `height` for better DX ([6f221d8](https://github.com/uStudioTeam/brix-ui/commit/6f221d8e00efc32aa3b9224104b0ff98f739fc14))
* **Spinner:** Set default `speed` to `100`, fix props descriptions ([72b3190](https://github.com/uStudioTeam/brix-ui/commit/72b31909822989af506b1235e948f3085c4b57f9))
* **Spinner:** Update story ([93dc50d](https://github.com/uStudioTeam/brix-ui/commit/93dc50d62c33e6c514bf2336dc61e2c5fb3abadb))
* **Storybook:** Add `JSX` tab ([f2f5361](https://github.com/uStudioTeam/brix-ui/commit/f2f5361fb7be732722c215fa61e17124e27ef1b4))
* **Storybook:** update global styles ([5030411](https://github.com/uStudioTeam/brix-ui/commit/5030411db5af3c51af90d73d44e14cd598116af3))
* **Switch:** Add `Switch` component ([b3ae6e5](https://github.com/uStudioTeam/brix-ui/commit/b3ae6e56f7e8a401ef0f0c2ba7c5e9b08d81e053))
* **Switch:** Add `Switch` component ([2e39008](https://github.com/uStudioTeam/brix-ui/commit/2e39008567329dd0ae42ad8ccc44671b846aefa2))
* **Switch:** remove `color` and `background` props ([a4db561](https://github.com/uStudioTeam/brix-ui/commit/a4db561b8d8841defa7b23dff919cb4ddd7e0103))
* **TextInput:** Add `NumberInput` component ([cfa73dc](https://github.com/uStudioTeam/brix-ui/commit/cfa73dc8411b85fad5d5f45e08aab8763f809b8a))
* **theme:** Update `README.md` ([ed33523](https://github.com/uStudioTeam/brix-ui/commit/ed33523a8dbbb2b982671d4488a307b91535e848))
* **Theme:** Update `faint` colors slightly ([a4fe009](https://github.com/uStudioTeam/brix-ui/commit/a4fe0092c2df220efcb1bd4fd01e42efad8c6c75))
* **ThemeProvider:** Update prop-types ([ce8cf47](https://github.com/uStudioTeam/brix-ui/commit/ce8cf47ac52fb682fc7ee84badb87b848a8565cb))
* Update packages with new theme usage ([4262227](https://github.com/uStudioTeam/brix-ui/commit/426222705b198a1f8aa1326c91907c98a5557f62))
* **Modal:** Add `prop-types`, export props ([02f786a](https://github.com/uStudioTeam/brix-ui/commit/02f786a99d7fa553fe44f1bb58910d1b18dd1738))
* **Portal:** Make `Portal` accept container element ([65e45b8](https://github.com/uStudioTeam/brix-ui/commit/65e45b82c7c2cb1439760ccf059c0dd11b7f7a41))
* **Status:** Add prop-types ([f9927db](https://github.com/uStudioTeam/brix-ui/commit/f9927dbabfbfb760a2eb27a1a8c4c2aa820fb5dc))
* **Status:** Update `Status` animation ([71f32e9](https://github.com/uStudioTeam/brix-ui/commit/71f32e9fdf3527d26439243c457a96b193d84835))
* **storybook:** Change theme switcher toolbar icon ([278c42b](https://github.com/uStudioTeam/brix-ui/commit/278c42b402fbe91e7d8bb76f8985597eaaa753e2))
* **storybook:** Properly setup props table generation ([67a1e15](https://github.com/uStudioTeam/brix-ui/commit/67a1e150fcf97f8def6ea52f8416ad5465afc5c8))
* **TextArea:** Add `TextArea` component ([ff05759](https://github.com/uStudioTeam/brix-ui/commit/ff057592cbb4065b034207d31da17ae41a3549fd))
* **TextArea:** Add prop-types ([14a4811](https://github.com/uStudioTeam/brix-ui/commit/14a48114b0bef199e928f1d69ba965a8c36fe326))
* **TextArea:** Set default `resize` to `vertical` ([54be7ca](https://github.com/uStudioTeam/brix-ui/commit/54be7caf112c16c6cf4757133353738de0663b96))
* **theme:** Add `transition` mixin ([5960b57](https://github.com/uStudioTeam/brix-ui/commit/5960b57e4b2bf376dd2d0c9881957420563655f7))
* **theme:** Let `ThemeProvider` render children as a function, reorganize `theme` package structure ([4d96adf](https://github.com/uStudioTeam/brix-ui/commit/4d96adf005668fe7b84946c603e4332695a1fe51))
* **theme:** Move `useTheme` to `hooks` folder ([b52694f](https://github.com/uStudioTeam/brix-ui/commit/b52694f894c8936bac446e8591ef089afd72cb2f))
* **theme:** Update `Typography` component ([42a8a88](https://github.com/uStudioTeam/brix-ui/commit/42a8a883d5c9bed23c1a6da29a540346bfaefcd3))
* **theme:** Update Theme ([079a525](https://github.com/uStudioTeam/brix-ui/commit/079a525b77521d690d4a7522c079e435e96b927c))
* Add root `README` ([1c38b0f](https://github.com/uStudioTeam/brix-ui/commit/1c38b0f28a62d9932e04af9b35ce065429b58b9b))
* **theme:** Update `ThemeProvider` component declaration ([9e43418](https://github.com/uStudioTeam/brix-ui/commit/9e43418fdd841b94e5ac22b13298d8f49c923c20))
* Add `Intentable` type ([8884a41](https://github.com/uStudioTeam/brix-ui/commit/8884a41d11e31b1a0d61c84d9546a1d8257b2e52))
* Remove some unused utils and types ([e736135](https://github.com/uStudioTeam/brix-ui/commit/e7361355917fd9747703baafdae1fb0f72591419))
* Set all classNames through `classNames` util function ([b55a430](https://github.com/uStudioTeam/brix-ui/commit/b55a43057ac83181092f75711c3770bb117ce9d7))
* Update `babel-plugin-styled-components` config ([f4b524f](https://github.com/uStudioTeam/brix-ui/commit/f4b524f7440d30519e85422d43e6b4f0feab8ec0))
* **Status:** Add `Status` component ([1ef7c89](https://github.com/uStudioTeam/brix-ui/commit/1ef7c890f803fe1d6276f5f0601745d033165c75))
* **Switch:** Change unchecked border color ([9e5d06c](https://github.com/uStudioTeam/brix-ui/commit/9e5d06c20b7d5b00a393165c2d27879e27aca4d5))
* **Text:** Additionally export every text variant as components ([a7dc916](https://github.com/uStudioTeam/brix-ui/commit/a7dc9165e17acdb1517de155ac40e681ac0f7f3f))
* **theme:** Update weak-down colors on light theme ([a52ed11](https://github.com/uStudioTeam/brix-ui/commit/a52ed112256723d702305f39d32d460259375c0a))
* **theme:** Update weak-down colors on light theme ([5f297e3](https://github.com/uStudioTeam/brix-ui/commit/5f297e3ae7ec6da4d040cd1d4afcd3d58f95dfbc))
* **Theme:** Export mixins as function expressions ([270b127](https://github.com/uStudioTeam/brix-ui/commit/270b1272790a647dfd77ece70367b3f9f0c0428e))
* **types:** Add `span` as possible flex container ([84c8289](https://github.com/uStudioTeam/brix-ui/commit/84c82890a07e228f73c8dc272a45cc70306105bf))
* **utils:** Add `classNames` function ([c118b11](https://github.com/uStudioTeam/brix-ui/commit/c118b11817894fb6696059d64c9101a65a727d00))
* **utils:** Attach `brix-` prefix to every predefined className ([4a0ec76](https://github.com/uStudioTeam/brix-ui/commit/4a0ec76a3279fdabc1adbcc6918598ec6541c8f9))
* **utils:** Export all functions as function expressions ([2a51a1a](https://github.com/uStudioTeam/brix-ui/commit/2a51a1a43095113c7d361f10108ddffb6dabb556))
* **utils:** Update `orUndefined` implementation to accept any type of value ([7f451af](https://github.com/uStudioTeam/brix-ui/commit/7f451aff7afb9fae42302289256ac834769bc319))
* Add `className` to container elements ([ac4ffd2](https://github.com/uStudioTeam/brix-ui/commit/ac4ffd27912b87a552579c7f9e1d94337d3484f1))
* Add `className` to container elements ([ec06f21](https://github.com/uStudioTeam/brix-ui/commit/ec06f214c1b967e1ad35c9ea9a19b1bb14d47875))
* Add animationDuration prop ([def7d71](https://github.com/uStudioTeam/brix-ui/commit/def7d71e44217640f322c0c4fd4ff51cfbb86cd4))
* Add common input css custom properties ([fce468c](https://github.com/uStudioTeam/brix-ui/commit/fce468cb2350343e302f1701433981d8d6afc7d7))
* Add common input css custom properties ([eba3224](https://github.com/uStudioTeam/brix-ui/commit/eba3224eecd0778dd693e28c4fa244cfef182088))
* Add pulsing animation ([ce1ba18](https://github.com/uStudioTeam/brix-ui/commit/ce1ba18138acb8509a77119cf735eae259a08cc4))
* Add saturating animation ([99101ba](https://github.com/uStudioTeam/brix-ui/commit/99101ba39fb86dd09df8122ef24a709d82e76ab2))
* Add status component ([1442a10](https://github.com/uStudioTeam/brix-ui/commit/1442a102aa8df260a6f52e73534cddcf0a1f1d25))
* Pass html attributes to styled components rather that custom props ([37e9f07](https://github.com/uStudioTeam/brix-ui/commit/37e9f0743f36c38be64424a482f26f827f44e524))
* Pass html attributes to styled components rather that custom props ([72b0bba](https://github.com/uStudioTeam/brix-ui/commit/72b0bba5c5675b38a39b0859b1e2eeb5203099b9))
* **Button:** Change faint button shadow opacity ([055ab8e](https://github.com/uStudioTeam/brix-ui/commit/055ab8e990eb8eafd260eca2e2a2a0fad816fecd))
* **Button:** change styles implementation ([cbde864](https://github.com/uStudioTeam/brix-ui/commit/cbde8643eaed0f0f566092276d24f3e1121a8adf))
* **contexts:** Add `Disabled` context ([1c97289](https://github.com/uStudioTeam/brix-ui/commit/1c97289ffd0fa698d100d5d6cd153e8884c78dc1))
* **contexts:** Rename `DirectionProvider` -> `Direction` ([70080a3](https://github.com/uStudioTeam/brix-ui/commit/70080a338bd493ea5d5586dd883b46dcdce1efed))
* **core:** Add `aria-hidden` for `Select` and `Input` label containers ([7bfccfb](https://github.com/uStudioTeam/brix-ui/commit/7bfccfb0414580218b9c074d437cc249723e66e5))
* **core:** Add `prevValue` argument to the `getValue` Input method ([e56c225](https://github.com/uStudioTeam/brix-ui/commit/e56c22531007d9db6650564d95ad6f93a12757e9))
* **core:** Update styles for cross-browser compatibility ([7e52ef3](https://github.com/uStudioTeam/brix-ui/commit/7e52ef3283144b1af765562b9fc728ed86b7c98d))
* **Dialog:** Add `Dialog` component ([36bb8a4](https://github.com/uStudioTeam/brix-ui/commit/36bb8a4623ac3150c61157d20b4cc69532660464))
* **Dialog:** Add `top` prop ([1aa5597](https://github.com/uStudioTeam/brix-ui/commit/1aa55977f038c9cb7c1c70b3334fcc9cedd2603d))
* **Dialog:** Update props declaration ([5c658fd](https://github.com/uStudioTeam/brix-ui/commit/5c658fd9edb363d8855c80af1b2632af74b83258))
* **Drawer:** Replace root element with `FocusLock` ([35849eb](https://github.com/uStudioTeam/brix-ui/commit/35849eb465da586fde37d7a1a65513d36e3431ca))
* **hooks:** Add `hooks` package ([9f4b3c6](https://github.com/uStudioTeam/brix-ui/commit/9f4b3c6827243ac28fc00eea5ce3a8b0c64d43ba))
* **hooks:** Add `use-updated-state` hook ([2ebb2eb](https://github.com/uStudioTeam/brix-ui/commit/2ebb2eb658a211e58511d85359927168b20c710c))
* **hooks:** Add `useInputValue` hook ([58114a4](https://github.com/uStudioTeam/brix-ui/commit/58114a426507051a353d5427d5928242f833cdb7))
* **hooks:** Add single-/multiple-selection hooks ([63b00d9](https://github.com/uStudioTeam/brix-ui/commit/63b00d9cc57033ede0f14003462c4a0cb2fc2ab1))
* **icons:** Add `icons` package ([7085c7e](https://github.com/uStudioTeam/brix-ui/commit/7085c7e1671bd4a16df6b45b2323fab332f95778))
* **icons:** Update SVG icons for `Check` and `Times` ([5fb82dd](https://github.com/uStudioTeam/brix-ui/commit/5fb82dd8611ea65b3c5b49b1d6ad7cc3732c396e))
* **Modal:** Add `Modal` context, update `Drawer` and `Overlay` components ([e9c857d](https://github.com/uStudioTeam/brix-ui/commit/e9c857dbba565ea23d3be7508eaee422895f4f9d))
* **Modal:** Update `Modal` context and hook ([3d73e1f](https://github.com/uStudioTeam/brix-ui/commit/3d73e1f063faeff670664fdefc987badd35e953d))
* **Overlay:** Add `Overlay component` ([5baa5fc](https://github.com/uStudioTeam/brix-ui/commit/5baa5fcc567dcc970d1054b6cc1f85ac43facf3f))
* **Overlay:** Add `PropTypes` ([3be8cf2](https://github.com/uStudioTeam/brix-ui/commit/3be8cf27f4948b27f994f548b51a14cb66129ff9))
* **prop-types:** Add new common prop-types ([8447ad8](https://github.com/uStudioTeam/brix-ui/commit/8447ad8f92c75c3be64d7898b765c3ec33e4ef57))
* **Select:** Move core styles and behaviour to internal `Dropdown` component ([ce7fdeb](https://github.com/uStudioTeam/brix-ui/commit/ce7fdeb65b367878926338fcce63aaac1f069fac))
* **Select:** Update props declaration ([a6f328d](https://github.com/uStudioTeam/brix-ui/commit/a6f328d73743b56ca8c29f02883666226f300f47))
* **Storybook:** Add container to `Select` story ([30614b2](https://github.com/uStudioTeam/brix-ui/commit/30614b2730f3fecedb550ac83434b320df25bfb8))
* **Storybook:** Update `Dialog` story ([c447063](https://github.com/uStudioTeam/brix-ui/commit/c447063421487a917dd0411df5b8c9193b9e7653))
* **Switch:** remove `color` and `background` props ([5f9acd6](https://github.com/uStudioTeam/brix-ui/commit/5f9acd62d09b8ce481f17a91901c2e04612e9fc2))
* **Text:** Add `label` as possible text element ([af4b60e](https://github.com/uStudioTeam/brix-ui/commit/af4b60ee5504b03255300959dcd5f2a7723f16f3))
* **Theme:** Add `transition` variables ([4322c6a](https://github.com/uStudioTeam/brix-ui/commit/4322c6a9ccb9ee5e13af45bcedff29d3d6b53c59))
* **Theme:** Update `base-strong-down` color on light theme ([e8b1c1c](https://github.com/uStudioTeam/brix-ui/commit/e8b1c1c0162ee8399eb97dc5f17f5b2c9e2bf9ec))
* **Theme:** Update `font-smoothing` property in `Reset` ([122095e](https://github.com/uStudioTeam/brix-ui/commit/122095ebedece32a3a5099dedc8bd72d198d25f6))
* **Theme:** Update `text-` colors ([2ecdaa2](https://github.com/uStudioTeam/brix-ui/commit/2ecdaa2f810d88f9d6d4f34193fdda1b90f20463))
* **Theme:** Update light theme colors ([416b609](https://github.com/uStudioTeam/brix-ui/commit/416b6094de6bb4439b8983e82cac1be72f55de8d))
* **TimePicker:** Add `TimePicker` component ([dc150a6](https://github.com/uStudioTeam/brix-ui/commit/dc150a66031404609700e2c9d9109efcc4c04316))
* **TimePicker:** Add prop-types ([69455a1](https://github.com/uStudioTeam/brix-ui/commit/69455a1322bcf93c27590cccd976c59de51a52a2))
* **TimePicker:** Update styles ([212e6b6](https://github.com/uStudioTeam/brix-ui/commit/212e6b6d7f84a3acae0dc9946860b6f904f2c2f7))
* **types:** Add `transitionSpeed` property to `Disclosable` type ([71bde17](https://github.com/uStudioTeam/brix-ui/commit/71bde17be4289a5c8031b1b1369f44129006b9ae))
* **useUnmountOnExit:** Update hook implementation ([48fcf0a](https://github.com/uStudioTeam/brix-ui/commit/48fcf0a3efcf573beb838b0ffde7933bbf6c66a8))
* **utils:** Add `toDouble` and `fillArray` functions ([023385b](https://github.com/uStudioTeam/brix-ui/commit/023385b048ead93b98e239798116538e33466f42))
* Add `applyDisplayNames` ([0df9549](https://github.com/uStudioTeam/brix-ui/commit/0df9549e38c14dfa8e06aab4fc3a046ee70ce500))
* Add `PolymorphicBreakpointProp` type ([75b3c4f](https://github.com/uStudioTeam/brix-ui/commit/75b3c4fb62bc542ce80804b328ff3bab73ec5e37))
* Add `Unmountable` type ([9977128](https://github.com/uStudioTeam/brix-ui/commit/9977128306da8cf3e28cddea59a872bbf9b48180))
* Add `useKeyPressHandle` hook, close modal view components on `Escape` press, correctly pass props to `ReactFocusLock` ([18ab848](https://github.com/uStudioTeam/brix-ui/commit/18ab848d14282ee3a31370765850e804fb349c6a))
* Add more local css variables to components ([537fb17](https://github.com/uStudioTeam/brix-ui/commit/537fb17733c8ee7140216ece61ae524a126155a5))
* Change `BreakpointsProps` type signature ([55f4ecc](https://github.com/uStudioTeam/brix-ui/commit/55f4ecc3d9152187d000c2b6c50d252af8c3709d))
* Update `filter-object` typing ([9d92e9c](https://github.com/uStudioTeam/brix-ui/commit/9d92e9cba8539611d5eda7734c645d186b9960bc))
* Update breakpoint-props related functionality ([333ccf7](https://github.com/uStudioTeam/brix-ui/commit/333ccf7f5ae4a64db51c5945fec6dbec9e8d818f))
* **types:** Add new component types ([fdb4de4](https://github.com/uStudioTeam/brix-ui/commit/fdb4de4e93e380e1260b21f498cd7ed50b58a130))
* **types:** Add new flex element ([7427fcd](https://github.com/uStudioTeam/brix-ui/commit/7427fcd8fe40907bda501d4f4cd5972910f673cd))
* **utils:** Add `random` function ([b166752](https://github.com/uStudioTeam/brix-ui/commit/b1667520287dc460faba9520d3d9d34a3630ddcc))
* Add `Delayable` type ([c665fec](https://github.com/uStudioTeam/brix-ui/commit/c665fecd277966260aba5b5056cf16c93d4c9de8))
* Add new `Disclosable` type ([66166d9](https://github.com/uStudioTeam/brix-ui/commit/66166d96dc47d7350a6b86e23dd9b8890d3a60b1))
* Add prop-types packages ([617ff5d](https://github.com/uStudioTeam/brix-ui/commit/617ff5d338b5dcb14b9a7ba00d76157a78d03a27))
* Add prop-types utils ([7259afa](https://github.com/uStudioTeam/brix-ui/commit/7259afa5bb8c745f118e63274b1df3f61b5f7795))
* Add prop-types validation ([96f021d](https://github.com/uStudioTeam/brix-ui/commit/96f021d18845da1dd9374981287a557b356d0d3a))
* Update main README title ([386f306](https://github.com/uStudioTeam/brix-ui/commit/386f306e6817f40b1fd515cf2e0cd1df37049bb9))
* **TextInput:** Add `TextInput` component ([0da8c79](https://github.com/uStudioTeam/brix-ui/commit/0da8c79b67e96b83587346cb4e808e7bf32b4382))
* **theme:** Add controls for palette story ([20d3365](https://github.com/uStudioTeam/brix-ui/commit/20d3365d5c431d8f19d409fe23cb90b8b9a926fd))
* **Theme:** Add `hidden` mixin ([6f3122c](https://github.com/uStudioTeam/brix-ui/commit/6f3122cc1466ae337ea414795955bc3cc8763844))
* **Theme:** Add `size` mixin ([26cec80](https://github.com/uStudioTeam/brix-ui/commit/26cec80f8f81ceeee18b01370dea045a13546185))
* **utils:** Add `filterObject` function ([369cd4d](https://github.com/uStudioTeam/brix-ui/commit/369cd4d839fde43872365c14693d2dd443f3e2c5))
* Create `StylableComponent` interface ([2fc411e](https://github.com/uStudioTeam/brix-ui/commit/2fc411e868e25211b25b1180e566a974f73aecf0))
* Extend `StylableComponent` in implemented components ([b35fb14](https://github.com/uStudioTeam/brix-ui/commit/b35fb140453e9daf52b113b69663fa82720977f8))
* **Badge:** add the ability to be rendered as a standalone element ([f8e0623](https://github.com/uStudioTeam/brix-ui/commit/f8e06237ba44e1cfd2eb14e41159cca144ffe27e))
* **block:** Make `gap` prop polymorphic ([a1f1cff](https://github.com/uStudioTeam/brix-ui/commit/a1f1cffb1381865929079bf6d9e5d5541a183bd4))
* **Button:** Add `borderRadius` prop ([a6708c3](https://github.com/uStudioTeam/brix-ui/commit/a6708c3089c201f3ea2e9a53641b93406d4a815c))
* **Button:** Apply not-/disabled styles by css selector ([45c894a](https://github.com/uStudioTeam/brix-ui/commit/45c894a1091c27ed71c66b5bea36105224c56d03))
* **Button:** Try a different approach for button interactions ([59aa435](https://github.com/uStudioTeam/brix-ui/commit/59aa435c53d8f5fe994c4cb7a456d39948f3a9f6))
* **Disclosure:** Add `Disclosure` component ([6c95d59](https://github.com/uStudioTeam/brix-ui/commit/6c95d59e014a8a88b7ea32368993419221bc8435))
* **Disclosure:** Add `Disclosure` component ([da9739b](https://github.com/uStudioTeam/brix-ui/commit/da9739bee942aa7bb50741f119aacc61dee70149))
* **Disclosure:** Add active styles ([5f7643b](https://github.com/uStudioTeam/brix-ui/commit/5f7643bb26aa226ff24ca29753d312f5cfd8286a))
* **Tag:** Add tag component ([b11642a](https://github.com/uStudioTeam/brix-ui/commit/b11642a24c6ab5b2771e4176bf59ba586bd7e00d))
* **Text:** Add `compensatingLineHeight` prop ([2382cfb](https://github.com/uStudioTeam/brix-ui/commit/2382cfb4b2ff7fc49ce40952196af178b1bd29cf))
* **Text:** Extend `line-height-compensation` functionality ([d709a0f](https://github.com/uStudioTeam/brix-ui/commit/d709a0ffdbe63e22de5ab70526934faa4451c520))
* **Theme:** move fonts to the default theme, update palette, add palette story, add theme modes ([c238416](https://github.com/uStudioTeam/brix-ui/commit/c2384168b7a17c4bc901f6482b05f40fdaf613ce))
* **Theme:** move fonts to the default theme, update palette, add palette story, add theme modes ([961e7be](https://github.com/uStudioTeam/brix-ui/commit/961e7beb70907dcfb3e0b0de25138e144b283db0))
* **Theme:** Weaken `faint-weak` colors on light theme ([7466db0](https://github.com/uStudioTeam/brix-ui/commit/7466db00b79be4130f2c17e61730d7642e3f1e8e))
* add applyIntentStyle function which applies button stylization according to button intent ([b7876a3](https://github.com/uStudioTeam/brix-ui/commit/b7876a3277ae479178c5450db3a270f960849c0d))
* add applyShadow function (applies box-shadow and text-shadow to buttons) ([aae65fc](https://github.com/uStudioTeam/brix-ui/commit/aae65fcf3a3fd3abf1b7abaebca9be6cde6fc8a9))
* Add Badge component ([a5b4ec3](https://github.com/uStudioTeam/brix-ui/commit/a5b4ec33adce0c49c96783f374110f9be55821fa))
* add initial Button component, button mixin for states and appearances ([d149bd3](https://github.com/uStudioTeam/brix-ui/commit/d149bd3f2690ae8b5770edf203c612a1762b64d0))
* Add palette ([4c1b36c](https://github.com/uStudioTeam/brix-ui/commit/4c1b36ca177f750a242da4f9af12467e2fda677b))
* add story for Button component ([f6515ff](https://github.com/uStudioTeam/brix-ui/commit/f6515ff0d9dbb9d32318000d33a8aa4886fec79e))
* add transition duration to buttons state transition ([ba6c10e](https://github.com/uStudioTeam/brix-ui/commit/ba6c10e2f833fc00b379b77a8e14ad85bb0020d5))
* Update typescript configuration for building ([cb11ce0](https://github.com/uStudioTeam/brix-ui/commit/cb11ce0ff7fccef7088f9fc9c9ca9c615a8ab2fb))
* **Disclosure:** Add active styles ([eebcd35](https://github.com/uStudioTeam/brix-ui/commit/eebcd35a37ff02e4b9c3be6dc652eb927fc327a0))
* **Tag:** compensate text line-height ([8378d6e](https://github.com/uStudioTeam/brix-ui/commit/8378d6e5534010ff8f38107261737197d7e81d35))
* **Text:** Update story ([0af98a1](https://github.com/uStudioTeam/brix-ui/commit/0af98a172ce1e89a30aa94830d1f3be7edd87876))
* **Theme:** Darken success color on a dark theme ([8fbcc01](https://github.com/uStudioTeam/brix-ui/commit/8fbcc01085afbc59dd9c428d3f8a750b4c7d1853))
* **Theme:** Weaken `faint-weak` colors on light theme ([eb50ab8](https://github.com/uStudioTeam/brix-ui/commit/eb50ab832126448319e2c9e196ded334f8a28280))
* Add `fonts` package ([520dac1](https://github.com/uStudioTeam/brix-ui/commit/520dac1be641aa04a433ccc0c8dec467ff429c03))
* Add `grid-system` package ([acdcf16](https://github.com/uStudioTeam/brix-ui/commit/acdcf167a9b4d09b412d197324518ffca9a1ea37))
* add border to all buttons, add `cursor: not-allowed;` to disabled buttons ([2b3db8e](https://github.com/uStudioTeam/brix-ui/commit/2b3db8edbadf6e18f0accca6e11637f74af8dba3))
* Add ColorTransformer ([a7da842](https://github.com/uStudioTeam/brix-ui/commit/a7da84237540a8281a3a63f0468b96d6bc4437fd))
* add disabled button state and appropriate story ([183e7a4](https://github.com/uStudioTeam/brix-ui/commit/183e7a44848bf66486260726b2b63cbcefb72fa2))
* add initial mixins for buttonsList ([9401a59](https://github.com/uStudioTeam/brix-ui/commit/9401a590fef088242eda94a6c763d8667bf68564))
* Add tests for Badge ([3b1611d](https://github.com/uStudioTeam/brix-ui/commit/3b1611da37dd5de582a57b0439dcbd1669e3fc8b))
* Create all components through `intrinsic-component` function ([d25d95b](https://github.com/uStudioTeam/brix-ui/commit/d25d95b5f33568b274efd654402bf3d7d927a98d))
* Export all styled components through `apply-display-name` function ([1dfd0c5](https://github.com/uStudioTeam/brix-ui/commit/1dfd0c54b2460fb8292747f5d2505fce59615e49))
* Migrate to storybook v6 ([d4a2d0b](https://github.com/uStudioTeam/brix-ui/commit/d4a2d0bb71c517bf64707bdcd6f9026b2a21d683))
* Move all color manipulations to `polished` ([043b6a5](https://github.com/uStudioTeam/brix-ui/commit/043b6a574e54e79fdc488c747af5e0064ef5e066))
* Palette v3 ([a8d0707](https://github.com/uStudioTeam/brix-ui/commit/a8d0707506c6bbfa2fe8e8548fe0920007ffda9e))
* Use custom contrasting color implementation ([275bdda](https://github.com/uStudioTeam/brix-ui/commit/275bdda726fd3af422d7502dcb300c1ff5646e7d))
* **grid:** Add index export ([0ca83af](https://github.com/uStudioTeam/brix-ui/commit/0ca83af77e66bbbab4e7a18e9a398bca3783852f))
* **grid:** Add more props, refactor styles and logic ([0ba660d](https://github.com/uStudioTeam/brix-ui/commit/0ba660d695035b202965036dcd99190b2e33fbf0))
* **grid:** Add proper name to the package references ([c67beeb](https://github.com/uStudioTeam/brix-ui/commit/c67beebc58e4cfd392c12d9dc735d1ce8f429c98))
* **grid:** Add story ([7964585](https://github.com/uStudioTeam/brix-ui/commit/7964585df0d60f8475c7f95d0bb48dbf842d43f0))
* **grid:** Apply `gap` changes from `Block` ([05b45fa](https://github.com/uStudioTeam/brix-ui/commit/05b45fa1ff6f85771abf3ea5fe8d7573e7b6d62f))
* **grid:** Rename `grid-system` -> `grid`, `grid` -> `grid-container` ([b1db8f8](https://github.com/uStudioTeam/brix-ui/commit/b1db8f8e4d69f0edac315af71b1f7682933ff344))
* **Theme:** Update some default colors ([9479285](https://github.com/uStudioTeam/brix-ui/commit/9479285af8ecb1101e89ca4a97717dc48b6dc467))
* tests for button ([cedd135](https://github.com/uStudioTeam/brix-ui/commit/cedd135316e0aab79c36a1ed06108f57e88d7e08))
* **grid:** Restore old names for grid components, add named exports from root ([253a98a](https://github.com/uStudioTeam/brix-ui/commit/253a98a22c6ef767c58a64637620fc1a7f2d6ba2))
* Rename `components` -> `core` ([95b372f](https://github.com/uStudioTeam/brix-ui/commit/95b372fd2e7eb861773a083dcc3e47030c3fcf32))
