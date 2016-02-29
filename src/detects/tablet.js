Useragnt.tablet =
    m("ipad")
    || (m("android") && !m("mobile"))
    || (m("windows") && m("touch") && !m("tablet pc"))
    || (m("firefox") && m("tablet"))
    || m("kindle")
    || m("silk")
    || m("playbook");